import random
import re
import discord

intents = discord.Intents.default()
intents.typing = False
intents.presences = False

TOKEN = "YOUR-TOKEN"
client = discord.Client(intents=intents)
intents = discord.Intents.all()


@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

@client.event
async def on_message(message):
    streamables = re.compile(r'(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[^&\s\?]+(?!\S))\/)|(?:\S*v=|v\/)))([^&\s\?]+)')
    match = streamables.search(message.content)
    if match and message.channel.id == {discord.TextChannel.id}:
        url = match.group()
        print(url)

@client.event
async def on_message(message):
    warn = ['Oh no league players', 'Someone kick him please', 'mods ban him', '💀']
    warns = random.choice(warn)
    if 'i love league of legends' in message.content.lower():
        await message.channel.send(warns)
    elif 'segs' in message.content.lower():
        await message.channel.send('No.')
    elif 'i am a furry' in message.content.lower():
        await message.channel.send('https://letmegooglethat.com/?q=psycholgical+therapy+near+me')
    elif 'french house music sucks' in message.content.lower():
        await message.channel.send('ip pulled')
    elif '<3' in message.content.lower():
        await message.channel.send('!!!')

client.run(TOKEN)
print('ok')
