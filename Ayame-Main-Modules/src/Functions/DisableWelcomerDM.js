function DisableWelcomerDMFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
   let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
    
    let dmdb = Db.get(`welcomerdm_${msg.guild.id}`)
  if(dmdb === null) return msg.channel.send(`${notice}The DM Welcomer is already **Disabled!**`)
  
  Db.delete(`welcomerdm_${msg.guild.id}`)
  msg.channel.send(`${notice}**Successfully Disabled the Welcomer DM!**`)
}
module.exports = DisableWelcomerDMFunction;