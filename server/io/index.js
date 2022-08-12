console.log("socket lancé !")

//discord js
const { SlashCommandBuilder, Routes} = require('discord.js');
const { Client, GatewayIntentBits} = require('discord.js');

//discord rest
const { REST } = require('@discordjs/rest');

//client login /!\ don't show the file 
const { clientId, guildId, token, rolePerm, DirectusLogin, DirectusPassWord, DirectusLink } = require('./client.json');


//for file .log 
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format


//for graphql (directus)
const {request, gql, resolveRequestDocument} = require ('graphql-request');
const { onRenderTriggered } = require('vue');


directusToken = async() => {
    const data = await request(`${DirectusLink}/system`, gql`
        mutation {
            auth_login(email: "${DirectusLogin}", password: "${DirectusPassWord}") {
                access_token
                refresh_token
            }
        }
    `).then(function(r) {return r})

    return await (data.auth_login)
}


async function GraphQLPost(quest){
    const data = await directusToken().then(r => {
        return request(`${DirectusLink}?access_token=${r.access_token}`, quest).then(function(r) {return r})
    })
    return data
}



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]});


const logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
      new transports.File({ filename: `./logs/log.log` }),
    ],
  });


//no commands, is just a bot who recup data
const commands = [
    
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
});



rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => {console.log('Successfully registered application commands.')
    })
    .catch(console.error);


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


client.on('ready', async() => {
    while(true){await client.guilds.cache.get(guildId).members.fetch()
    .then((r) => {
        let staff = r.filter(m => m.roles.cache.get(rolePerm)).map((m) => {
            return m.user.username
        })
        
        logger.log('info', `il y a ${staff.length} membres de staff dans ce serveur`)
        GraphQLPost(gql`
        mutation {
            update_incroyaux_item(id:1, data: { value: "${staff.length}" }){
                key
                value
            }
        }`).then(r=>logger.log('info',r)).catch(r=>logger.log('error',r))
    })
    await sleep(3600*1000)}
})


    
client.login(token);

module.exports = {
    logger: logger,
    default : function Svc(socket, io) {
        return Object.freeze({
            async dataDisord(){ 
                logger.info("data demander")
                let data = await GraphQLPost(gql`
                query {
                    incroyaux{
                            key
                            value
                    }
                }
                `).then(r => {return r}).catch(r => logger.error(r))
                return data
            },
            
        })
    }
};

