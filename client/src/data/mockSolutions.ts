
import { PeerSolution } from '../types';

export const MOCK_SOLUTIONS: PeerSolution[] = [
    {
        id: 'mock-sol-1',
        author: 'Eldrin the Wise',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Eldrin',
        challengeId: 'p4',
        challengeAnswer: "Light traveling from air (n=1) into water (n=1.33) at an angle of 30° will refract at approximately 22°.",
        explanation: "This phenomenon is governed by Snell's Law, which states n₁sin(θ₁) = n₂sin(θ₂). Here, n₁=1.00 (air) and θ₁=30°. The second medium is water, so n₂=1.33. We need to find θ₂. Plugging in the values: (1.00) * sin(30°) = (1.33) * sin(θ₂). Since sin(30°) = 0.5, we get 0.5 = 1.33 * sin(θ₂). Solving for sin(θ₂), we get sin(θ₂) ≈ 0.3759. Taking the arcsin of this value gives θ₂ ≈ 22.08°, which explains the final refracted angle.",
        rating: 4.8,
        comments: 15,
    },
    {
        id: 'mock-sol-2',
        author: 'Lyra Spellweaver',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Lyra',
        challengeId: 'cs2',
        challengeAnswer: "The function returned the value 55.",
        explanation: "This is the result of calculating the 10th Fibonacci number, F(10), using a recursive function where F(n) = F(n-1) + F(n-2) with base cases F(0)=0 and F(1)=1. The calculation tree would expand significantly. For instance, F(10) calls F(9) and F(8). F(9) calls F(8) and F(7), and so on, until the base cases are reached. The sum of all the leaves of this recursive tree eventually adds up to 55. It's a classic example of recursive calculation.",
        rating: 4.5,
        comments: 12,
    },
    {
        id: 'mock-sol-3',
        author: 'Garrick Alchemist',
        authorAvatar: 'https://api.dicebear.com/8.x/pixel-art/svg?seed=Garrick',
        challengeId: 'c3',
        challengeAnswer: "The reactants were HCl and NaOH.",
        explanation: "The products given are NaCl (a salt) and H₂O (water). This is the hallmark of a classic acid-base neutralization reaction. To form the salt Sodium Chloride (NaCl), we would need a sodium (Na) source and a chloride (Cl) source. The most common strong base with sodium is Sodium Hydroxide (NaOH), and the most common strong acid with chloride is Hydrochloric Acid (HCl). Therefore, the reaction must have been: HCl + NaOH -> NaCl + H₂O.",
        rating: 4.2,
        comments: 8,
    }
];