
import { ChatMessage } from '../types';

export const MOCK_MESSAGES: ChatMessage[] = [
    {
        id: 'msg1',
        channel: '#general-discussion',
        authorId: 'user-1',
        authorName: 'Eldrin the Wise',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Eldrin',
        text: "Greetings, fellow sorcerers. A fine day to twist the threads of logic, is it not?",
        timestamp: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
    },
    {
        id: 'msg2',
        channel: '#general-discussion',
        authorId: 'user-2',
        authorName: 'Lyra Spellweaver',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Lyra',
        text: "Indeed, Eldrin! I've just been pondering a particularly fiendish paradox in the CS grimoire. The recursive ones always require an extra pinch of mana.",
        timestamp: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
    },
     {
        id: 'msg3',
        channel: '#math-wizards',
        authorId: 'user-4',
        authorName: 'Seraphina Firegem',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Seraphina',
        text: "Has anyone found an elegant way to explain the Fundamental Theorem of Calculus without making it sound like a dusty old scroll?",
        timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
    {
        id: 'msg4',
        channel: '#math-wizards',
        authorId: 'user-8',
        authorName: 'Orion Starseeker',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Orion',
        text: "I like to describe it as the ultimate magical shortcut! Instead of counting every grain of sand on a beach (integration), you just look at the difference between the first and last grain (the boundaries). Works for my apprentices!",
        timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    },
     {
        id: 'msg5',
        channel: '#physics-phalanx',
        authorId: 'user-6',
        authorName: 'Ronan Stormcaller',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Ronan',
        text: "Struggling with Snell's Law. It feels... slippery. Any tips for a stormcaster more used to brute force?",
        timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    },
    {
        id: 'msg6',
        channel: '#cs-coven',
        authorId: 'user-9',
        authorName: 'Zephyr Rune-eye',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Zephyr',
        text: "Does anyone want to form a study group to tackle the Hard-level recursion challenges? I'll bring the enchanted snacks.",
        timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    },
     {
        id: 'msg7',
        channel: '#cs-coven',
        authorId: 'user-2',
        authorName: 'Lyra Spellweaver',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Lyra',
        text: "I'm in, Zephyr! My stack traces are getting tangled.",
        timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    }
];