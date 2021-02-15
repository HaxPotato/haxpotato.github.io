var storyContent = ﻿{"inkVersion":19,"root":[["^hi.","\n",{"->":"first"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"first":[["^are you a friend or foe?","\n","ev","str","^friend","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^foe","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"friend"},"\n",{"#f":5}],"c-1":["^ ",{"->":"foe"},"\n",{"#f":5}]}],{"#f":1}],"friend":[["^i'm happy that you made it! how have you been? it's been too long.","\n","ev","str","^what is this place?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":5}]}],{"#f":1}],"foe":[["^what? why? do i even know you?","\n","ev","str","^yes","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^no","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"yes"},"\n",{"#f":5}],"c-1":["^ ",{"->":"no"},"\n",{"#f":5}]}],{"#f":1}],"no":[["^i think that we've started off on the wrong foot then. let's try to be friends first.","\n","ev","str","^what is this place?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"intro"},"\n",{"#f":5}]}],{"#f":1}],"yes":[["^:( are you mad at me? what did i do?","\n","ev","str","^nothing, i was lying and i actually appreciate you deeply","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"friend"},"\n",{"#f":5}]}],{"#f":1}],"intro":[["^oh right right right. by the way, this is my personal website! welcome!","\n","ev","str","^who are you?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ my name is nikhil sethi! i'm a writer and designer based in san francisco.","\n",{"->":"nikhil"},{"#f":5}]}],{"#f":1}],"nikhil":[["^what do you wanna ",["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^chat",{"->":".^.^.17"},null],"s1":["pop","^talk",{"->":".^.^.17"},null],"#f":5}],"^ about?","\n","ev","str","^what do you do?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^tell me more about yourself","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^how do i reach you?","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^why is this place like this?","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^what are you thinking about right now?","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^cool, bye!","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["^ ",{"->":"work"},"\n",{"#f":5}],"c-1":["^ ",{"->":"story1"},"\n",{"#f":5}],"c-2":["^ ",{"->":"contact"},"\n",{"#f":5}],"c-3":["^ ",{"->":"meta1"},"\n",{"#f":5}],"c-4":["^ ",{"->":"thoughts1"},"\n",{"#f":5}],"c-5":["^ ",{"->":"finish"},"\n",{"#f":5}]}],{"#f":1}],"work":[["^i'm a writer and designer! i have a weekly newsletter and an occasionally updated blog. i don't really have public design work right now, but that'll change. you can ask me about it.","\n","ev","str","^can i see your writing?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^how do i reach you?","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^what's your work experience like?","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ",{"->":"writing"},"\n",{"#f":5}],"c-1":["^ ",{"->":"contact"},"\n",{"#f":5}],"c-2":["^ ",{"->":"career"},"\n",{"#f":5}]}],{"#f":1}],"career":[["^i work as a product designer at apple, working on secret things. i joined in the june of 2020, when the startup i was working for (fleetsmith) was acquired). i have some more career info on my <a href=\"https://linkedin.com/in/nikhilrsethi\"> linkedin.</a>","\n","ev","str","^nice","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"writing":[["^of course! you can check out my blog <a href=\"https://blog.niksethi.com\"> here</a> or my newsletter <a href=\"https://splash.niksethi.com\"> here</a>","\n","ev","str","^cool","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"contact":[["^i'm excessively active on <a href=\"https://twitter.com/niknaps\">twitter</a> and my DMs are open there. otherwise, you can email me at hey[at]niksethi.com.","\n","ev","str","^dope","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"story1":[["^hmmm. what defines a person? maybe history:","\n","^i was born in georgia to two immigrants from india 23 years ago.","\n","^i grew up in the suburbs of atlanta and went to college there at georgia tech, studying computational media (CS + design). during that time, i learned about how people's minds work, writing code, making short films, building video games, designing, and a lot about myself.","\n","^afterwards, i moved to sf to become a product designer.","\n","ev","str","^okay, that's all i wanted to know","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^but like, who are you, really?","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"nikhil"},"\n",{"#f":5}],"c-1":["^ ",{"->":"story2"},"\n",{"#f":5}]}],{"#f":1}],"story2":[["^man idk. there's so many things i could say to that. what i think defines me the most is my love for art. i have a wide definition of art, inclusive of everything from bad tweets to the most gorgeous symphonies. in my mind, art is a means to make meaning by connecting with others.","\n","^what really resonates with me is that one quote from psychologist carl rogers:","\n","^\"what's most personal is most universal.\"","\n","^with art, we have the opportunity to turn our personal into a universal experience, one that can bring people together. and bringing people together is important because there's a unity to us all.","\n","ev","str","^uh tmi, dude","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^what art do you like though?","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^none of that was really about you","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ",{"->":"nikhil"},"\n",{"#f":5}],"c-1":["^ ",{"->":"art"},"\n",{"#f":5}],"c-2":["^ ",{"->":"story3"},"\n",{"#f":5}]}],{"#f":1}],"story3":[["^once i was listening to a podcast and the host brought up a question that still boggles my mind:","\n","^\"who are you without the doing?\"","\n","^in some capitalist brainwashed way, i often find it hard to define myself outside of my actions. i'm tied to my professional life as a designer, my private life as writer...","\n","^i could list a million facts about me, but that might not get you any closer to really knowing who i am.","\n","ev","str","^let's just talk in real life then","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^i wanna hear about other stuff","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"contact"},"\n",{"#f":5}],"c-1":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"art":[["^i like to log the art that i consume because memory is fickle and i wish to hold onto what touches me.","\n","ev","str","^what music do you like?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^what movies do you like?","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^what do you read?","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^anything else?","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^good to know!","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^i still don't know if i really know who you are though","/str","/ev",{"*":".^.c-5","flg":4},{"c-0":["^ ",{"->":"music"},"\n",{"#f":5}],"c-1":["^ ",{"->":"film"},"\n",{"#f":5}],"c-2":["^ ",{"->":"books"},"\n",{"#f":5}],"c-3":["^ ",{"->":"visualart"},"\n",{"#f":5}],"c-4":["^ ",{"->":"nikhil"},"\n",{"#f":5}],"c-5":["^ ",{"->":"story3"},"\n",{"#f":5}]}],{"#f":1}],"music":[["^the first art form i really cared about was music. i remember my family singing hindi songs and bhajans and later my brother and i would swap CDs that we burned ourselves.","\n","^my taste is always evolving. i'll truly listen to anything. my favorite artists all time include radiohead, linkin park, james blake, frank ocean, julien baker, sufjan stevens and arlo parks. you can keep up with my latest obsessions on my <a href=\"https://last.fm/user/bluemonkey108\">last.fm</a>.","\n","ev","str","^what else?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"art"},"\n",{"#f":5}]}],{"#f":1}],"film":[["^i love movies enough to call them films when i want to impress someone or seem like a serious person. david fincher is my favorite director and some of my top films are <em>rear window</em>, <em>the social network</em>, and <em>arrival</em>. i keep track of the films i watch on <a href=\"https://letterboxd.com/niksethi\">letterboxd.</a>","\n","ev","str","^what else?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"art"},"\n",{"#f":5}]}],{"#f":1}],"books":[["^i'm a voracious reader, and always have been. i have fond memories of the librarian at my elementary school, with her south african accent and excellent book recommendations.","\n","^i love (relatively) mundane stories of people's lives. somehow the commonplace occurrences of people's lives are more interesting to me than imagined universes. some recent favorites include <em>stoner</em> by john williams, <em>dept. of speculation</em> by jenny offill, <em>minor feelings</em> by cathy park hong, and <em>they can't kill us until they kill us</em> by hanif abdurraqib. i also capture my reading on <a href=\"https://goodreads.com/user/show/7128017-nikhil-sethi\">goodreads.</a>","\n","^i'm also slowly getting into poetry. i love the work of chen chen, matthew olzmann, mary oliver, and jim moore. i save some of my favorite poems on <a href=\"https://www.are.na/nikhil-sethi/pome\"> this are.na board</a>.","\n","ev","str","^what else?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"art"},"\n",{"#f":5}]}],{"#f":1}],"visualart":[["^my life changed during my junior year of high school. i took an art history course, hoping that it would boost my gpa. instead, my entire worldview shifted, as i found history interesting for the first time, as i realized that these visual forms expressed the diversity of the human experience and that i knew so little about what it meant to be alive.","\n","^kazimir malevich was a russian painter who found the concept of suprematism — art meant to represent \"the supremacy of human feeling,\" yet only consisting of geometric shapes. my understanding of the world collapsed, as i began to realize that anything could mean anything or nothing at all.","\n","^i haven't found a good way to catalog art, but in general, i love abstract forms of art that challenge traditional forms of thinking. rothko, judd, frankenthaler all come to mind as some of my favorites. i also love kruger and baldessari.","\n","^it feels important to add that i cried the first time i saw a work of jmw turner in real life. or maybe that the bench in front of the monet in the high museum in atlanta was often my favorite place of refuge.","\n","ev","str","^what else?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"art"},"\n",{"#f":5}]}],{"#f":1}],"meta1":[["^websites have such immense capabilities, you know? here we have these open-ended spaces that can be built with hundreds of different technologies, but what we end up with is a deluge of sameness. i've always thought of technology as a way to extend and enhance creativity, and the sameness of websites feels like a waste of potential.","\n","^laurel schwulst wrote <a href=\"https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be\"> a great post about websites can be</a> that inspired me to think bigger. what if a website was <em>an experience</em>?","\n","^what if my website was a conversation?","\n","ev","str","^but why?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^that answers my question","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"meta2"},"\n",{"#f":5}],"c-1":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"meta2":[["^i'm already an extremely online person. before this website, i used my website as a switchboard, simply a way to redirect folks to my other online presences. i'm doing that a bit here, but why keep it as just a list?","\n","^in my many other online spaces, i'm ultimately confined by the rules of the land. in my own little corner of the web, i'd like to communicate in a way that feels authentic to me —— the written word.","\n","^and like, is there any greater joy than a conversation?","\n","ev","str","^this is sort of a one-sided conversation","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^that answers my question","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"meta3"},"\n",{"#f":5}],"c-1":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"meta3":[["^that's a fair point! the reality is that i'm not so technically advanced that i could make this a real conversation, and i'm not sure i want to be. if you wanted a real conversation, you could start one. but why should our traditional interactions with the web have to feel so much less human?","\n","^like, we're human beings using technology made by other human beings, so why do we act more like robots when using them? i've never talked to a person the way that i talk to a voice assistant, i have truly never wanted to learn a piece of jargon.","\n","ev","str","^let's have a real conversation then","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^that answers my question","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"contact"},"\n",{"#f":5}],"c-1":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"thoughts1":[["^you ;)","\n","ev","str","^no really","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"thoughts2"},"\n",{"#f":5}]}],{"#f":1}],"thoughts2":[["^when i am thinking about something, i usually explore it on an are.na channel, you can find my profile <a href=\"https://www.are.na/nikhil-sethi\"> here.</a>","\n","^lately i've been thinking about love.","\n","ev","str","^whate about love?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^let's talk about something else","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"love1"},"\n",{"#f":5}],"c-1":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"love1":[["^ALL ABOUT LOVE!","\n","^(that's the title of a book by bell hooks i read recently) i've just been wondering why romantic love is so centered as <em>the love</em> in our lives, as if it's the only thing that matters. maybe it's just the easiest form of love in an individualistic society, one that can be commodified and converted into idealistic songs, films, books, gifts, etc.","\n","ev","str","^have you ever been in love?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^let's talk about something else","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"love2"},"\n",{"#f":5}],"c-1":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"love2":[["^a few times, here and there. though i've been working to expand my definition of what that means. i've been in love with wonderful women in relationships, but is that the only way to fall in love. can i be in love with the moment i heard \"throwaway\" by sg lewis and clairo for the first time? can i be in love with the way my body weakens when i get really happy and excited? can i be in love with my tears? can i be in love with my constant fear of death?","\n","ev","str","^let's talk about something else","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"nikhil"},"\n",{"#f":5}]}],{"#f":1}],"finish":["^thanks for stopping by! hope to see you again soon, in the flesh, in this little land of mine, or among the many gardens of the web. do keep in touch.","\n","^as anaïs nin said, \"each friend represents a world in us, a world that is possibly not born until they arrive, and it is only in that encounter that a new world can emerge.\"","\n","ev",{"CNT?":"foe"},"/ev",[{"->":".^.b","c":true},{"b":["^ hope you think of us as friends now ",{"->":"finish.8"},null]}],"nop","\n","ev",{"CNT?":"friend"},"/ev",[{"->":".^.b","c":true},{"b":["^ it was good to talk to you again and visit the world that only we share. ",{"->":"finish.14"},null]}],"nop","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};