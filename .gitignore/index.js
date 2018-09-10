const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
const config = require("./config.json");
var heureduraid;

const music = new Music(client, {
    youtubeKey: 'AIzaSyCjEoIhPe_7G29JFPe8OS08mqYbYqIkO3c',
    enableQueueStat: true,
    requesterName: true,
    anyoneCanSkip: true,
    anyoneCanAdjust: true,
    helpCmd: 'helpm',
    maxQueueSize: 3,
    skipAlt: ['272354934383706113', '225624519291830272'],
    botAdmins: ["272354934383706113", "225624519291830272"]
});


var ListeUtilisateur = new Array("341575439887892480" ,"358701377947697152","219520989539598336","294380360291057664");

const newUsers = [];
client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setGame(`on ${client.guilds.size} servers`);
});


client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find("name", "general").send("Welcome our new users!\n" + userlist);
    newUsers[guild.id].clear();
  }
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});


client.on("message", async message => {
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "heureduraid") {
        heureduraid = args.join(" ");
        message.channel.send(heureduraid);
    }

    if (command === "pseudo") {
        const newpseudo = args.join(" ");
        message.member.setNickname(newpseudo);
        message.channel.send("Pseudo changé", );
    }

    if (command === "membre") {
        const SuiteMessage = args.join(" ");
        if (SuiteMessage === "145632") {
            let role = message.guild.roles.find("name", "Membres vocal");
            let member = message.mentions.members.first();
            message.member.addRole(role).catch(console.error);
            message.channel.send("Membre ajouter");
        }
        if (SuiteMessage !== "145632") {
            message.channel.send("Mauvais Code !");
        }
        message.delete();

    }

    if (command === "ping") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    if (command === "ce") {

        const SuiteMessage = args.join(" ");
        if (SuiteMessage === "nm") {
            message.channel.send("@everyone Cauchemar d'émeraude en NM ce soir à " + heureduraid);
        }
        if (SuiteMessage === "hm") {
            message.channel.send("@everyone Cauchemar d'émeraude en HM ce soir à $heureduraid", );
        }
        if (SuiteMessage === "mm") {
            message.channel.send("@everyone Cauchemar d'émeraude en MM ce soir à $heureduraid", );
        }

    }

    if (command === "ps") {

        const sayMessage = args.join(" ");
        if (sayMessage === "nm") {
            message.channel.send("@everyone Raid Palais Sacrenuit en NM ce soir à 21h30 !!", );
        }
        if (sayMessage === "hm") {
            message.channel.send("@everyone Raid Palais Sacrenuit en HM ce soir à 21h30 !!", );
        }
        if (sayMessage === "mm") {
            message.channel.send("@everyone Raid Palais Sacrenuit en MM ce soir à 21h30 !!", );
        }

    }

    if (command === "tos") {

        const sayMessage = args.join(" ");
        if (sayMessage === "nm") {
            message.channel.send("@everyone Raid Tombe de Sargeras en NM ce soir à 21h30 !!", );
        }
        if (sayMessage === "hm") {
            message.channel.send("@everyone Raid Tombe de Sargeras en HM ce soir à 21h30 !!", );
        }
        if (sayMessage === "mm") {
            message.channel.send("@everyone Raid Tombe de Sargeras en MM ce soir à 21h30 !!", );
        }

    }

    if (command === "jdv") {

        const sayMessage = args.join(" ");
        if (sayMessage === "nm") {
            message.channel.send("@everyone Raid Jugement des Valeureux en NM ce soir à 21h30 !!", );
        }
        if (sayMessage === "hm") {
            message.channel.send("@everyone Raid Jugement des Valeureuxen HM ce soir à 21h30 !!", );
        }
        if (sayMessage === "mm") {
            message.channel.send("@everyone Raid Jugement des Valeureux en MM ce soir à 21h30 !!", );
        }

    }

    if (command === "help") {

        message.delete();
        message.author.sendMessage("Salut, voici toutes mes commandes disponible ! \n( **** = information à écrire ) \n ```!heureduraid ******* | Permet de choisir une heure pour le raid ! (Vous pouvez mettre ecrire se que vous voulez) \n!ce ** | Permet d envoyer un message à tout le monde par rapport à un raid ce, * = nm,hm,mm \n!ps ** | Permet d envoyer un message à tout le monde par rapport à un raid ps, * = nm,hm,mm \n!tos ** | Permet d envoyer un message à tout le monde par rapport à un raid ce, * = nm,hm,mm \n!jdv ** | Permet d envoyer un message à tout le monde par rapport à un raid ce, * = nm,hm,mm \n!pseudo ******* | Pour changer de pseudo \n!membre ******* | Entrer le code pour pouvoir discuter sur le discord \n!rand | Pour pouvoir faire un random \n ```");
    }

    if (command === "vote")

    if (command === "kick") {

        if (message.author.id == '219520989539598336') {

            // This command must be limited to mods and admins. In this example we just hardcode the role names.
            // Please read on Array.some() to understand this bit:
            // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
            if (!message.member.roles.some(r => ["Administrator", "Moderator"].includes(r.name)))
                return message.reply("Sorry, you don't have permissions to use this!");

            // Let's first check if we have a member and if we can kick them!
            // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
            let member = message.mentions.members.first();
            if (!member)
                return message.reply("Please mention a valid member of this server");
            if (!member.kickable)
                return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

            // slice(1) removes the first part, which here should be the user mention!
            let reason = args.slice(1).join(' ');
            if (!reason)
                return message.reply("Please indicate a reason for the kick!");

            // Now, time for a swift kick in the nuts!
            await member.kick(reason)
                .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
        } else {
            return;
        }

    }

  /*  if (command === "ban") {

        if (message.author.id == '219520989539598336') {

            // Most of this command is identical to kick, except that here we'll only let admins do it.
            // In the real world mods could ban too, but this is just an example, right? ;)
            if (!message.member.roles.some(r => ["Administrator"].includes(r.name)))
                return message.reply("Sorry, you don't have permissions to use this!");

            let member = message.mentions.members.first();
            if (!member)
                return message.reply("Please mention a valid member of this server");
            if (!member.bannable)
                return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

            let reason = args.slice(1).join(' ');
            if (!reason)
                return message.reply("Please indicate a reason for the ban!");

            await member.ban(reason)
                .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
            message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
        } else {
            return;
        }
    } */
    if (command === "tableau")
        {
            for(var i=0; i<ListeUtilisateur.length; i++)
        {
            message.channel.send(ListeUtilisateur[i]);
        }
        }
    if (command === "purge") {

        for(var i=0; i<ListeUtilisateur.length; i++)
        {
        if (message.author.id === ListeUtilisateur[i]) {
            async function purge() {
                message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.
                message.delete();
                // We want to check if the argument is a number
                if (isNaN(args[0])) {
                    // Sends a message to the channel.
                    message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                    // Cancels out of the script, so the rest doesn't run.
                    return;
                }

                const fetched = await message.channel.fetchMessages({
                    limit: args[0]
                }); // This grabs the last number(args) of messages in the channel.
                console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

                // Deleting the messages
                message.channel.bulkDelete(fetched)
                    .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

            }

            // We want to make sure we call the function whenever the purge command is run.
            purge(); // Make sure this is inside the if(msg.startsWith)
        }
    }}

    if (command === "raid") {
        message.channel.send(" ``` Liste des raids : \n Tombe de Sargeras = tos \n Palais sacrenuit = ps \n Cauchemar d'émeraude = ce \n Jugement des Valeureux = jdv \n Pour la difficulté : nm / hm / mm, exemple : ps nm ```");
    }

    if (command === "rand") {
        var roll = Math.floor(Math.random() * 100) + 1;
        message.channel.send("Tu as obtenu " + roll);
    }


});

client.login("NDE4NDc5NDc3NjYwODQ0MDMz.DXlKow.BSBmC3TsYjWQZU37o1nokJWjbkM");
