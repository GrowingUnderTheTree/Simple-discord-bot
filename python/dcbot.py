from email import message
import random
import re
from tkinter import N
from tracemalloc import start
from turtle import color, title
import discord
import time
from discord.ext.commands import Bot
from discord.ext import commands
from discord import Spotify
from datetime import datetime

time = time.time()
intents = discord.Intents.default()
intents.typing = False
intents.presences = False
intents.members = True
bot = commands.Bot(command_prefix='#')

TOKEN = "HERE"
client = discord.Client(intents=intents)
intents = discord.Intents.all()
game = discord.Game(name="Did you just told someone to shut?")
notallowed = ['discrod.co','discrod.gift','gift.discord','nitro.discord','discord.nitro','dlscord']
suicidal = ['depressed','kill','suicide','die','kys']
lgbtq = ['furry','gay','lessbian','bisexual','lgbtq','furry','transgender']


@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
    await client.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name="Among us drip remix"))

@client.event
async def on_message(message):
    streamables = re.compile(r'(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[^&\s\?]+(?!\S))\/)|(?:\S*v=|v\/)))([^&\s\?]+)')
    match = streamables.search(message.content)
    if match and message.channel.id == {856377663543312418}:
        url = match.group()
        print(url)


@client.event
async def on_message(message):
    now = datetime.now()
    currenttime = now.strftime("%H:%M:%S")
    warn = ['Oh no league players', 'Someone kick him please', 'mods ban him', '💀']
    l1984 = ['Literally 1984','Big brother is watching you']
    pp = ['round','hexagon','double barell','Dont have','curved','short']
    size = random.choice(pp)
    warns = random.choice(warn)
    literally = random.choice(l1984)
    if 'i love league of legends' in message.content.lower():
        await message.channel.send(warns)
    elif 'segs' in message.content.lower():
        await message.channel.send('No.')
    elif 'i am a furry' in message.content.lower():
        await message.channel.send('discord.gg/pride')
    elif 'french house music sucks' in message.content.lower():
        await message.channel.send('ip pulled')
    elif '<3' in message.content.lower():
        await message.channel.send('!!!')
    elif 'nig' in message.content.lower():
        await message.channel.send('https://tenor.com/view/hog-rider-coc-clash-of-clans-gif-24053135')
    elif '?warn' in message.content.lower():
        await message.channel.send(literally)
    elif 'pp' in message.content.lower():
        await message.channel.send(size)
    elif 'time' in message.content.lower():
        await message.channel.send(currenttime)
    elif 'youtu.be' in message.content.lower():
        await message.channel.send('Is this youtube')
    elif 'shut' in message.content.lower():
        await message.channel.send('Bro just change to dnd')
        await client.change_presence(status=discord.Status.idle, activity=game)
    elif any(words in message.content.lower() for words in notallowed):
            embedVar = discord.Embed(title="Are you sending the wrong link?", description="Hi, it looks like the link you sent is a scam", color=0x00ff00)
            embedVar.add_field(name="Why?", value="The link you sent here is not discord.com, but something else. So, please look closely to check whether is there a typo.", inline=False)
            embedVar.add_field(name="Be careful", value="There's no free things in the world, so beware everytime if you are going to click a Nitro gift link.\n p.s. follow me at github http://github.com/GrowingUnderTheTree", inline=False)
            await message.channel.send(embed=embedVar)
    elif any(suicidalwords in message.content.lower() for suicidalwords in suicidal):
            embedstuff = discord.Embed(title="Need help?", description="Killing yourself can't solve the problems.\n Please take a look at the helplist below", color=0xB00B69)
            embedstuff.add_field(name="Websites if you need help", value="Safe in our world : https://safeinourworld.org\nBefrienders : https://www.befrienders.org.my\nLifeline : https://suicidepreventionlifeline.org", inline=False)
            embedstuff.add_field(name="Hotlines", value="03-76272929 for Malaysia", inline=False)
            await message.channel.send(embed=embedstuff)
    elif any(pride in message.content.lower() for pride in lgbtq):
        embedlgbt = discord.Embed(title="LGBTQ+ yes", description = "discord.gg/pride", color = 0xB00B69)
        embedlgbt.add_field(name="Learn more here",value="https://en.wikipedia.org/wiki/LGBT", inline=False)
        await message.channel.send(embed=embedlgbt)

"""
@client.event
async def on_message(message):
        if any(words in message.content.lower() for words in notallowed):
            embedVar = discord.Embed(title="Are you sending on the wrong link?", description="Hi, it looks like the link you sent is a scam", color=0x00ff00)
        embedVar.add_field(name="Why?", value="The link you sent here is not discord.com, but something else. So, please look closely to check whether is there a typo.", inline=False)
        embedVar.add_field(name="Be careful", value="There's no free things in the world, so beware everytime if you are going to click a Nitro gift link.\n p.s. follow me at github http://github.com/GrowingUnderTheTree", inline=False)
        await message.channel.send(embed=embedVar)
"""

client.run(TOKEN)
end = time.time()
print('Code stopped after ', end-start, ' Seconds')

