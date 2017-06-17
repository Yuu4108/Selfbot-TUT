discord = require("Discord.js")
chalk = require("chalk")
token = require('./package.json')

client.on('ready', () => {
    console.log(chalk.red("Selfbot started with 0 errors"))
});

client.on('message', msg =>
{
	if(msg.author.id != client.author.id)
	{
		return;
	}
	
	if(msg.channel.type == 'dm')
	{
		return;
	}
	
	if(!msg.startsWith(prefix))
	{
		return;
	}


if(msg.content == "/ping")
msg.channel.Send('Pong!')
});

client.login(package.token)