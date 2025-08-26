
import { Subject, Topic, Challenge, Branch } from '../types';

export const ALL_BRANCHES: Branch[] = ['CSE', 'ECE', 'Mechanical', 'Civil'];

export const ALL_SUBJECTS: Subject[] = ['Engineering Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Programming for Problem Solving', 'Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Digital Logic Design', 'Thermodynamics', 'Fluid Mechanics', 'Strength of Materials', 'Structural Analysis', 'Surveying'];

export const COMMON_SUBJECTS: Subject[] = ['Engineering Mathematics', 'Engineering Physics', 'Engineering Chemistry', 'Programming for Problem Solving'];

export const BRANCH_SUBJECTS: Record<Branch, Subject[]> = {
    'CSE': [...COMMON_SUBJECTS, 'Data Structures & Algorithms', 'Operating Systems', 'DBMS'],
    'ECE': [...COMMON_SUBJECTS, 'Data Structures & Algorithms', 'Digital Logic Design'],
    'Mechanical': [...COMMON_SUBJECTS, 'Thermodynamics', 'Fluid Mechanics', 'Strength of Materials'],
    'Civil': [...COMMON_SUBJECTS, 'Strength of Materials', 'Structural Analysis', 'Surveying'],
};

const ENGINEERING_MATHEMATICS_TOPICS: Topic[] = [
    {
        id: 'em-topic-calculus', name: 'Differential Calculus', description: 'The mathematical study of continuous change.',
        challenges: [
            { id: 'em-c-1', answer: "f'(x) = 21x^6", description: "The original function was f(x) = 3x^7. Explain how the power rule is used to find this derivative.", difficulty: 'Easy' },
            { id: 'em-c-2', answer: "The limit is 16", description: "The expression was lim(x->4) of (x^2). Explain why direct substitution works here.", difficulty: 'Easy' },
            { id: 'em-c-3', answer: "f'(x) = 3cos(3x)", description: "The original function was f(x) = sin(3x). Explain how the chain rule is used here.", difficulty: 'Medium' },
            { id: 'em-c-4', answer: "f'(x) = e^x(sinx + cosx)", description: "The original function was f(x) = e^x * sinx. Explain the product rule for differentiation.", difficulty: 'Medium' },
            { id: 'em-c-5', answer: "f'(x) = (cosx*x - sinx*1)/x^2", description: "The function was f(x) = sinx / x. Explain the quotient rule for differentiation.", difficulty: 'Medium' },
            { id: 'em-c-6', answer: "The slope is 12.", description: "The tangent line to the curve y = 3x^2 at the point (2, 12) was found. Explain the relationship between derivatives and the slope of a tangent.", difficulty: 'Easy' },
            { id: 'em-c-7', answer: "The function has a local maximum.", description: "The second derivative of a function at a critical point is negative. What does the second derivative test tell you?", difficulty: 'Medium' },
            { id: 'em-c-8', answer: "Rolle's Theorem was applied.", description: "A function is continuous on [a,b], differentiable on (a,b), and f(a)=f(b). The conclusion is there exists a c in (a,b) such that f'(c)=0. Name this theorem.", difficulty: 'Hard' },
            { id: 'em-c-9', answer: "f'(x) = 1/x", description: "The original function was f(x) = ln(x). What is its derivative?", difficulty: 'Easy' },
            { id: 'em-c-10', answer: "Implicit differentiation was used.", description: "To find dy/dx for the equation x^2 + y^2 = 25, we got 2x + 2y(dy/dx) = 0. What is this differentiation technique called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'em-topic-integral', name: 'Integral Calculus', description: 'Finding wholeness from parts, areas, and volumes.',
        challenges: [
            { id: 'em-ic-1', answer: "The integral is x^4 + C.", description: "The function being integrated was 4x^3. Explain the power rule for integration.", difficulty: 'Easy' },
            { id: 'em-ic-2', answer: "The area is 1/3.", description: "The definite integral of x^2 from 0 to 1 was calculated. Explain the Fundamental Theorem of Calculus.", difficulty: 'Medium' },
            { id: 'em-ic-3', answer: "Integration by parts was used.", description: "The integral of x*cosx was found using the formula ∫udv = uv - ∫vdu. What is this technique called?", difficulty: 'Medium' },
            { id: 'em-ic-4', answer: "The integral is -cosx + C.", description: "The function being integrated was sinx. What is its antiderivative?", difficulty: 'Easy' },
            { id: 'em-ic-5', answer: "The integral diverges.", description: "The improper integral of 1/x from 1 to infinity was evaluated. Explain why.", difficulty: 'Hard' },
            { id: 'em-ic-6', answer: "u-substitution was used.", description: "To solve ∫(2x * (x^2+1)^2) dx, the substitution u = x^2+1 was made. What is this integration technique called?", difficulty: 'Medium' },
            { id: 'em-ic-7', answer: "The volume is π/2.", description: "The solid of revolution was found by rotating the curve y=sinx from 0 to π around the x-axis. Explain the disk method.", difficulty: 'Hard' },
            { id: 'em-ic-8', answer: "The integral is tan(x) + C.", description: "The function being integrated was sec^2(x). What is its antiderivative?", difficulty: 'Easy' },
            { id: 'em-ic-9', answer: "Partial fraction decomposition was used.", description: "To integrate 1/((x-1)(x+1)), it was broken into A/(x-1) + B/(x+1). What is this technique called?", difficulty: 'Hard' },
            { id: 'em-ic-10', answer: "The average value is 2/3.", description: "The average value of the function f(x) = x^2 on the interval [1, 3] was calculated. What is the formula for the average value of a function?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'em-topic-algebra', name: 'Linear Algebra', description: 'The study of vectors, vector spaces, and linear mappings.',
        challenges: [
            { id: 'em-la-1', answer: "The determinant is -2.", description: "This is the determinant of the 2x2 matrix [[1, 2], [3, 4]]. Explain the formula ad-bc.", difficulty: 'Easy' },
            { id: 'em-la-2', answer: "The matrix is singular.", description: "The determinant of a square matrix was calculated to be 0. What does this mean for its invertibility?", difficulty: 'Medium' },
            { id: 'em-la-3', answer: "The eigenvalue is 5", description: "For a matrix A and a vector v, it was found that Av = 5v. Define what an eigenvalue and eigenvector are in this context.", difficulty: 'Hard' },
            { id: 'em-la-4', answer: "[5, 7]", description: "The result of adding vectors [1, 3] and [4, 4]. Explain how vector addition works.", difficulty: 'Easy' },
            { id: 'em-la-5', answer: "The vectors are linearly independent.", description: "The only solution to c1*v1 + c2*v2 = 0 was c1=0 and c2=0. What does this imply about the vectors v1 and v2?", difficulty: 'Medium' },
            { id: 'em-la-6', answer: "The dot product is 25.", description: "The dot product of vectors [3, 4] and [3, 4] was calculated. Explain the formula for the dot product.", difficulty: 'Easy' },
            { id: 'em-la-7', answer: "The rank of the matrix is 2.", description: "The number of leading 1s in the row echelon form of a matrix was 2. What does this number represent?", difficulty: 'Medium' },
            { id: 'em-la-8', answer: "The matrix is orthogonal.", description: "A square matrix A had the property that its transpose is equal to its inverse (A^T = A^-1). What is such a matrix called?", difficulty: 'Hard' },
            { id: 'em-la-9', answer: "The cross product was calculated.", description: "For two vectors in 3D space, a third vector was found that is perpendicular to both. What operation produces this result?", difficulty: 'Medium' },
            { id: 'em-la-10', answer: "Gaussian elimination was used.", description: "A system of linear equations was solved by converting its augmented matrix to row echelon form. What is this method called?", difficulty: 'Medium' },
        ]
    },
     {
        id: 'em-topic-diffeq', name: 'Differential Equations', description: 'Equations involving an unknown function and its derivatives.',
        challenges: [
            { id: 'em-de-1', answer: "The equation is of the first order.", description: "The highest derivative in a differential equation was dy/dx. How is the order of a differential equation determined?", difficulty: 'Easy' },
            { id: 'em-de-2', answer: "Separation of variables was used.", description: "The equation dy/dx = x/y was rewritten as y dy = x dx to be solved. What is this solution method called?", difficulty: 'Medium' },
            { id: 'em-de-3', answer: "The equation is linear.", description: "A differential equation was in the form dy/dx + P(x)y = Q(x). What is the term for this type of equation?", difficulty: 'Easy' },
            { id: 'em-de-4', answer: "y = Ce^(kx)", description: "This is the general solution to the differential equation dy/dx = ky. Explain what this type of growth/decay is called.", difficulty: 'Medium' },
            { id: 'em-de-5', answer: "An integrating factor was used.", description: "To solve a linear first-order DE, it was multiplied by a special function to make it integrable. What is this function called?", difficulty: 'Hard' },
            { id: 'em-de-6', answer: "The equation is homogeneous.", description: "A second-order linear DE was in the form ay'' + by' + cy = 0. What is the term for this type of equation?", difficulty: 'Medium' },
            { id: 'em-de-7', answer: "The characteristic equation was solved.", description: "To solve ay'' + by' + cy = 0, the algebraic equation ar^2 + br + c = 0 was solved for r. What is this algebraic equation called?", difficulty: 'Medium' },
            { id: 'em-de-8', answer: "The equation is exact.", description: "A differential equation M(x,y)dx + N(x,y)dy = 0 had the property that ∂M/∂y = ∂N/∂x. What does this property mean?", difficulty: 'Hard' },
            { id: 'em-de-9', answer: "y_p = Asinx + Bcosx", description: "For a DE with a right-hand side of sin(x), a particular solution of this form was assumed. What is this solution method called?", difficulty: 'Hard' },
            { id: 'em-de-10', answer: "An initial condition was given.", description: "To find the specific solution to a DE, a value such as y(0) = 1 was provided. What is this piece of information called?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'em-topic-probability', name: 'Probability & Statistics', description: 'The study of uncertainty and data.',
        challenges: [
            { id: 'em-ps-1', answer: "The probability is 1/6.", description: "The probability of rolling a '4' on a standard fair six-sided die was calculated. Explain the basic formula for probability.", difficulty: 'Easy' },
            { id: 'em-ps-2', answer: "The events are independent.", description: "The probability of two events A and B occurring was found to be P(A) * P(B). What does this say about the relationship between A and B?", difficulty: 'Medium' },
            { id: 'em-ps-3', answer: "The mean is 3.5.", description: "For a standard die roll, the expected value was calculated. Explain how to calculate the mean (expected value) of a discrete probability distribution.", difficulty: 'Medium' },
            { id: 'em-ps-4', answer: "Bayes' Theorem was used.", description: "The probability P(A|B) was calculated using P(B|A), P(A), and P(B). What theorem relates these conditional probabilities?", difficulty: 'Hard' },
            { id: 'em-ps-5', answer: "A permutation was calculated.", description: "The number of ways to arrange 3 books out of 5 on a shelf was found. Does this scenario involve permutations or combinations? Why?", difficulty: 'Medium' },
            { id: 'em-ps-6', answer: "A combination was calculated.", description: "The number of ways to choose a committee of 3 students from a group of 10 was found. Does this involve permutations or combinations? Why?", difficulty: 'Medium' },
            { id: 'em-ps-7', answer: "The normal distribution was used.", description: "A 'bell curve' was used to model the distribution of heights in a population. What is the name of this continuous probability distribution?", difficulty: 'Easy' },
            { id: 'em-ps-8', answer: "The standard deviation is 2.", description: "The variance of a dataset was found to be 4. What is the relationship between variance and standard deviation?", difficulty: 'Easy' },
            { id: 'em-ps-9', answer: "The events are mutually exclusive.", description: "Two events could not happen at the same time. What is the term for this relationship?", difficulty: 'Easy' },
            { id: 'em-ps-10', answer: "The Law of Large Numbers.", description: "An experiment was repeated many times, and the average of the results got closer and closer to the expected value. What principle does this illustrate?", difficulty: 'Hard' },
        ]
    }
];

const ENGINEERING_PHYSICS_TOPICS: Topic[] = [
    {
        id: 'ep-topic-mechanics', name: 'Mechanics', description: 'The study of motion, forces, and energy.',
        challenges: [
            { id: 'ep-m-1', answer: "F = ma", description: "This is Newton's Second Law of Motion. Explain what each term represents.", difficulty: 'Easy' },
            { id: 'ep-m-2', answer: "The net force is zero.", description: "An object was observed to be moving at a constant velocity. According to Newton's First Law, what can be said about the net force acting on it?", difficulty: 'Easy' },
            { id: 'ep-m-3', answer: "Work = 50 J", description: "A force of 10 N was applied to an object, moving it 5 meters in the direction of the force. Explain the formula for work done.", difficulty: 'Easy' },
            { id: 'ep-m-4', answer: "Momentum was conserved.", description: "In a collision between two objects in an isolated system, the total momentum before the collision was equal to the total momentum after. What principle does this demonstrate?", difficulty: 'Medium' },
            { id: 'ep-m-5', answer: "Kinetic Energy = 25 J", description: "An object with a mass of 2 kg is moving at 5 m/s. Explain the formula for kinetic energy.", difficulty: 'Easy' },
            { id: 'ep-m-6', answer: "Potential Energy = 196 J", description: "A 10 kg mass is held 2 meters above the ground (g ≈ 9.8 m/s^2). Explain the formula for gravitational potential energy.", difficulty: 'Easy' },
            { id: 'ep-m-7', answer: "The forces are an action-reaction pair.", description: "A book resting on a table exerts a downward force on the table. The table exerts an equal and opposite upward force on the book. What is this pair of forces called according to Newton's Third Law?", difficulty: 'Medium' },
            { id: 'ep-m-8', answer: "Centripetal force is required.", description: "An object is moving in a circle at a constant speed. What is the name of the net force that must be acting on it to maintain this circular path?", difficulty: 'Medium' },
            { id: 'ep-m-9', answer: "Torque = 10 Nm", description: "A force of 5 N is applied at a distance of 2 m from a pivot point, perpendicularly. Explain the basic concept of torque.", difficulty: 'Medium' },
            { id: 'ep-m-10', answer: "The object is in equilibrium.", description: "The net force and net torque on an object are both zero. What is the state of the object called?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'ep-topic-em', name: 'Electromagnetism', description: 'The interaction between electric charges and magnetic fields.',
        challenges: [
            { id: 'ep-em-1', answer: "F = kq1q2/r^2", description: "This is Coulomb's Law, describing the force between two point charges. Explain what each term represents.", difficulty: 'Easy' },
            { id: 'ep-em-2', answer: "V = IR", description: "This is Ohm's Law for a simple circuit. Define voltage, current, and resistance.", difficulty: 'Easy' },
            { id: 'ep-em-3', answer: "Gauss's Law was used.", description: "The electric flux through a closed surface was found to be proportional to the enclosed charge. What law is this?", difficulty: 'Medium' },
            { id: 'ep-em-4', answer: "A magnetic field was created.", description: "An electric current was passed through a long, straight wire. What was observed in the region around the wire?", difficulty: 'Easy' },
            { id: 'ep-em-5', answer: "Faraday's Law of Induction.", description: "Changing the magnetic flux through a coil of wire was found to induce a voltage (EMF) in the coil. What law describes this phenomenon?", difficulty: 'Medium' },
            { id: 'ep-em-6', answer: "The force is perpendicular to both velocity and field.", description: "A charged particle moved through a magnetic field and experienced a force. What is the direction of this magnetic force relative to the particle's velocity and the magnetic field?", difficulty: 'Hard' },
            { id: 'ep-em-7', answer: "The resistors are in series.", description: "The total resistance of two resistors was found by simply adding their individual resistances (R_total = R1 + R2). How were these resistors connected?", difficulty: 'Easy' },
            { id: 'ep-em-8', answer: "The capacitors are in parallel.", description: "The total capacitance of two capacitors was found by adding their individual capacitances (C_total = C1 + C2). How were they connected?", difficulty: 'Medium' },
            { id: 'ep-em-9', answer: "Lenz's Law.", description: "An induced current was found to flow in a direction that opposes the change in magnetic flux that created it. What is the name of this rule?", difficulty: 'Hard' },
            { id: 'ep-em-10', answer: "Maxwell's Equations.", description: "A set of four fundamental equations was used to describe the behavior of electric and magnetic fields and their interaction. What are these equations collectively known as?", difficulty: 'Hard' },
        ]
    },
     {
        id: 'ep-topic-optics', name: 'Optics', description: 'The behavior and properties of light.',
        challenges: [
            { id: 'ep-o-1', answer: "The angle of incidence equals the angle of reflection.", description: "A ray of light bounced off a flat mirror. State the Law of Reflection.", difficulty: 'Easy' },
            { id: 'ep-o-2', answer: "Refraction occurred.", description: "A pencil placed in a glass of water appeared bent. What is this phenomenon called?", difficulty: 'Easy' },
            { id: 'ep-o-3', answer: "n1*sin(θ1) = n2*sin(θ2)", description: "This is Snell's Law. Explain what it describes and what the 'n' values represent.", difficulty: 'Medium' },
            { id: 'ep-o-4', answer: "A real, inverted image was formed.", description: "An object was placed outside the focal point of a convex lens. Describe the characteristics of the image formed.", difficulty: 'Medium' },
            { id: 'ep-o-5', answer: "A virtual, upright image was formed.", description: "An object was placed inside the focal point of a convex lens (used as a magnifier). Describe the characteristics of the image formed.", difficulty: 'Medium' },
            { id: 'ep-o-6', answer: "Diffraction occurred.", description: "Light waves bent as they passed through a narrow slit, creating a pattern of bright and dark fringes. What is this phenomenon called?", difficulty: 'Medium' },
            { id: 'ep-o-7', answer: "Constructive interference.", description: "Two light waves met in phase, and the resulting wave had a larger amplitude, creating a bright spot. What type of interference is this?", difficulty: 'Easy' },
            { id: 'ep-o-8', answer: "Destructive interference.", description: "Two light waves met out of phase, and the resulting wave had a smaller amplitude, creating a dark spot. What type of interference is this?", difficulty: 'Easy' },
            { id: 'ep-o-9', answer: "Polarization was used.", description: "Unpolarized light was passed through a special filter, and the transmitted light waves were found to oscillate in only one plane. What is this process called?", difficulty: 'Hard' },
            { id: 'ep-o-10', answer: "Dispersion occurred.", description: "White light was passed through a prism and separated into its constituent colors (a rainbow). What is this phenomenon called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'ep-topic-waves', name: 'Waves and Oscillations', description: 'The study of periodic motion and disturbances.',
        challenges: [
            { id: 'ep-w-1', answer: "The motion is Simple Harmonic Motion (SHM).", description: "The restoring force on an object was found to be directly proportional to its displacement from equilibrium (F = -kx). What kind of motion does this describe?", difficulty: 'Medium' },
            { id: 'ep-w-2', answer: "The period is 2 seconds.", description: "An oscillator completes one full cycle every 2 seconds. What is the term for this time?", difficulty: 'Easy' },
            { id: 'ep-w-3', answer: "The frequency is 0.5 Hz.", description: "An oscillator completes half a cycle per second. What is the term for this rate, and how does it relate to the period?", difficulty: 'Easy' },
            { id: 'ep-w-4', answer: "The wave is transverse.", description: "The particles of the medium oscillated perpendicular to the direction of energy propagation. What type of wave is this (e.g., light, a wave on a string)?", difficulty: 'Easy' },
            { id: 'ep-w-5', answer: "The wave is longitudinal.", description: "The particles of the medium oscillated parallel to the direction of energy propagation. What type of wave is this (e.g., sound)?", difficulty: 'Easy' },
            { id: 'ep-w-6', answer: "The Doppler Effect was observed.", description: "The pitch of an ambulance siren sounded higher as it approached and lower as it moved away. What is this effect called?", difficulty: 'Medium' },
            { id: 'ep-w-7', answer: "A standing wave was created.", description: "Two waves of the same frequency and amplitude traveling in opposite directions interfered, creating points of no displacement (nodes) and maximum displacement (antinodes). What is this wave pattern called?", difficulty: 'Medium' },
            { id: 'ep-w-8', answer: "The amplitude is 5 meters.", description: "The maximum displacement of a particle from its equilibrium position in a wave was 5 meters. What is the term for this?", difficulty: 'Easy' },
            { id: 'ep-w-9', answer: "The wavelength is 10 meters.", description: "The distance between two consecutive crests of a wave was 10 meters. What is the term for this distance?", difficulty: 'Easy' },
            { id: 'ep-w-10', answer: "Resonance occurred.", description: "A system was driven at its natural frequency, resulting in a large increase in amplitude. What is this phenomenon called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'ep-topic-modern', name: 'Modern Physics', description: 'Concepts from the 20th century, including relativity and quantum mechanics.',
        challenges: [
            { id: 'ep-mp-1', answer: "E = mc^2", description: "This is Einstein's mass-energy equivalence formula. Explain its fundamental meaning.", difficulty: 'Medium' },
            { id: 'ep-mp-2', answer: "The photoelectric effect was observed.", description: "Light shining on a metal surface caused electrons to be ejected. What is this effect called, and what does it demonstrate about the nature of light?", difficulty: 'Medium' },
            { id: 'ep-mp-3', answer: "Time dilation occurred.", description: "An observer on Earth measured the clock on a fast-moving spaceship to be ticking slower than their own clock. What is this relativistic effect called?", difficulty: 'Hard' },
            { id: 'ep-mp-4', answer: "Length contraction occurred.", description: "An observer on Earth measured a fast-moving spaceship to be shorter in its direction of motion than its length at rest. What is this relativistic effect called?", difficulty: 'Hard' },
            { id: 'ep-mp-5', answer: "The object exhibits wave-particle duality.", description: "An electron was shown to behave like both a particle (with mass) and a wave (it can be diffracted). What is this fundamental concept in quantum mechanics called?", difficulty: 'Medium' },
            { id: 'ep-mp-6', answer: "Energy levels in the atom are quantized.", description: "An electron in a hydrogen atom could only exist in specific, discrete energy states. What does this imply about energy at the atomic level?", difficulty: 'Medium' },
            { id: 'ep-mp-7', answer: "Heisenberg's Uncertainty Principle.", description: "It was found to be impossible to simultaneously know both the exact position and the exact momentum of a particle. What principle states this?", difficulty: 'Hard' },
            { id: 'ep-mp-8', answer: "The strong nuclear force.", description: "The force holding protons and neutrons together in the nucleus, overcoming the electrical repulsion between protons, was identified. What is this force?", difficulty: 'Easy' },
            { id: 'ep-mp-9', answer: "Alpha decay occurred.", description: "An unstable nucleus emitted a particle consisting of two protons and two neutrons (a helium nucleus). What type of radioactive decay is this?", difficulty: 'Easy' },
            { id: 'ep-mp-10', answer: "Beta decay occurred.", description: "A neutron in a nucleus turned into a proton, and an electron was emitted. What type of radioactive decay is this?", difficulty: 'Easy' },
        ]
    }
];

const ENGINEERING_CHEMISTRY_TOPICS: Topic[] = [
    {
        id: 'ec-topic-structure', name: 'Atomic & Molecular Structure', description: 'The fundamental building blocks of matter.',
        challenges: [
            { id: 'ec-s-1', answer: "It has 6 protons.", description: "An atom was identified as Carbon. What does the atomic number (6) tell you about this atom?", difficulty: 'Easy' },
            { id: 'ec-s-2', answer: "They are isotopes.", description: "Two atoms of Carbon have the same number of protons but different numbers of neutrons (e.g., Carbon-12 and Carbon-14). What is the relationship between them?", difficulty: 'Easy' },
            { id: 'ec-s-3', answer: "The VSEPR theory was used.", description: "The shape of the methane molecule (CH4) was predicted to be tetrahedral. What theory is used to predict molecular geometry based on minimizing electron pair repulsion?", difficulty: 'Medium' },
            { id: 'ec-s-4', answer: "An ionic bond was formed.", description: "Sodium (Na) transferred an electron to Chlorine (Cl) to form NaCl. What type of chemical bond is this?", difficulty: 'Easy' },
            { id: 'ec-s-5', answer: "A covalent bond was formed.", description: "Two hydrogen atoms shared electrons to form an H2 molecule. What type of chemical bond is this?", difficulty: 'Easy' },
            { id: 'ec-s-6', answer: "The molecule has a trigonal planar shape.", description: "A central atom is bonded to three other atoms and has no lone pairs (e.g., BF3). What is its molecular geometry?", difficulty: 'Medium' },
            { id: 'ec-s-7', answer: "It is a polar molecule.", description: "The water molecule (H2O) has a bent shape and an uneven distribution of charge. What is the term for such a molecule?", difficulty: 'Medium' },
            { id: 'ec-s-8', answer: "The s and p orbitals were hybridized.", description: "In methane (CH4), the carbon atom's orbitals combined to form four equivalent sp3 orbitals to bond with hydrogen. What is this process of mixing atomic orbitals called?", difficulty: 'Hard' },
            { id: 'ec-s-9', answer: "An orbital is a region of high probability of finding an electron.", description: "According to the quantum mechanical model of the atom, what is the definition of an atomic orbital?", difficulty: 'Medium' },
            { id: 'ec-s-10', answer: "Hydrogen bonding is occurring.", description: "A strong type of intermolecular force was observed between water molecules due to the attraction between a hydrogen atom on one molecule and an oxygen atom on another. What is this force called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'ec-topic-thermo', name: 'Chemical Thermodynamics', description: 'The study of energy in chemical reactions.',
        challenges: [
            { id: 'ec-t-1', answer: "The reaction is exothermic.", description: "A chemical reaction released heat into the surroundings, and its change in enthalpy (ΔH) was negative. What type of reaction is this?", difficulty: 'Easy' },
            { id: 'ec-t-2', answer: "The reaction is endothermic.", description: "A chemical reaction absorbed heat from the surroundings, and its change in enthalpy (ΔH) was positive. What type of reaction is this?", difficulty: 'Easy' },
            { id: 'ec-t-3', answer: "The entropy (ΔS) of the system increased.", description: "A solid substance sublimated into a gas. What can be said about the change in the system's disorder or randomness?", difficulty: 'Medium' },
            { id: 'ec-t-4', answer: "The reaction is spontaneous.", description: "The Gibbs free energy change (ΔG) for a reaction was calculated to be negative. What does this indicate about the reaction under the given conditions?", difficulty: 'Medium' },
            { id: 'ec-t-5', answer: "ΔG = ΔH - TΔS", description: "This equation relates Gibbs free energy, enthalpy, and entropy. Write it down.", difficulty: 'Easy' },
            { id: 'ec-t-6', answer: "Hess's Law was used.", description: "The enthalpy change for a reaction was calculated by summing the enthalpy changes of a series of other reactions that add up to the overall reaction. What is this law called?", difficulty: 'Hard' },
            { id: 'ec-t-7', answer: "The system is at equilibrium.", description: "The Gibbs free energy change (ΔG) for a reaction was calculated to be zero. What does this indicate about the state of the reaction?", difficulty: 'Medium' },
            { id: 'ec-t-8', answer: "The activation energy was lowered.", description: "A catalyst was added to a reaction, causing it to proceed much faster. How does a catalyst achieve this?", difficulty: 'Medium' },
            { id: 'ec-t-9', answer: "This is the Second Law of Thermodynamics.", description: "The total entropy of an isolated system can only increase over time. What fundamental law is this?", difficulty: 'Medium' },
            { id: 'ec-t-10', answer: "This is the First Law of Thermodynamics.", description: "Energy cannot be created or destroyed, only converted from one form to another. What fundamental law is this?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'ec-topic-kinetics', name: 'Chemical Kinetics', description: 'The study of reaction rates.',
        challenges: [
            { id: 'ec-k-1', answer: "The concentration of reactants was increased.", description: "A chemical reaction was observed to speed up. What is a common way to increase the rate by altering the amounts of starting materials?", difficulty: 'Easy' },
            { id: 'ec-k-2', answer: "The temperature was increased.", description: "A reaction rate doubled. This was achieved by raising the temperature, which increases the kinetic energy of molecules. Why does this speed up the reaction?", difficulty: 'Medium' },
            { id: 'ec-k-3', answer: "A catalyst was added.", description: "A substance was added that increased the reaction rate without being consumed in the reaction. What is this substance called?", difficulty: 'Easy' },
            { id: 'ec-k-4', answer: "The reaction is second order overall.", description: "The rate law for a reaction was found to be Rate = k[A][B]. What is the overall order of this reaction?", difficulty: 'Medium' },
            { id: 'ec-k-5', answer: "The reaction is zero order with respect to A.", description: "In the rate law Rate = k[A]^0[B]^1, changing the concentration of reactant A had no effect on the reaction rate. What does this mean?", difficulty: 'Medium' },
            { id: 'ec-k-6', answer: "The half-life was measured.", description: "The time it took for the concentration of a reactant to decrease to half its initial value was determined. What is this time called?", difficulty: 'Easy' },
            { id: 'ec-k-7', answer: "The Arrhenius equation was used.", description: "The relationship between the rate constant (k), activation energy (Ea), and temperature (T) was described by the equation k = Ae^(-Ea/RT). What is this equation called?", difficulty: 'Hard' },
            { id: 'ec-k-8', answer: "The activation energy.", description: "The minimum amount of energy required for reactants to turn into products was identified on a reaction energy diagram. What is this energy barrier called?", difficulty: 'Easy' },
            { id: 'ec-k-9', answer: "The rate-determining step.", description: "In a multi-step reaction mechanism, the overall rate of the reaction was limited by the slowest step in the sequence. What is this step called?", difficulty: 'Hard' },
            { id: 'ec-k-10', answer: "The surface area was increased.", description: "A solid reactant was ground into a fine powder, which caused the reaction to speed up. Why did this happen?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'ec-topic-electro', name: 'Electrochemistry', description: 'The study of chemical reactions that produce or are caused by electricity.',
        challenges: [
            { id: 'ec-e-1', answer: "Oxidation occurred at the anode.", description: "In an electrochemical cell, one electrode was losing electrons. What is this process called, and where does it occur?", difficulty: 'Easy' },
            { id: 'ec-e-2', answer: "Reduction occurred at the cathode.", description: "In an electrochemical cell, one electrode was gaining electrons. What is this process called, and where does it occur?", difficulty: 'Easy' },
            { id: 'ec-e-3', answer: "It is a galvanic (voltaic) cell.", description: "An electrochemical cell was constructed that produced electricity from a spontaneous chemical reaction. What is this type of cell called?", difficulty: 'Medium' },
            { id: 'ec-e-4', answer: "It is an electrolytic cell.", description: "An electrochemical cell used an external power source to drive a non-spontaneous chemical reaction. What is this type of cell called?", difficulty: 'Medium' },
            { id: 'ec-e-5', answer: "The salt bridge.", description: "A component in a galvanic cell allowed ions to flow between the two half-cells to maintain charge neutrality. What is this component called?", difficulty: 'Medium' },
            { id: 'ec-e-6', answer: "The cell potential (E_cell) is positive.", description: "A galvanic cell was determined to be spontaneous. What does this imply about its standard cell potential?", difficulty: 'Medium' },
            { id: 'ec-e-7', answer: "The Nernst equation was used.", description: "The cell potential under non-standard conditions (different concentrations) was calculated. What equation is used for this?", difficulty: 'Hard' },
            { id: 'ec-e-8', answer: "Corrosion is an electrochemical process.", description: "The rusting of iron was described as the oxidation of iron metal. What general term, often described electrochemically, applies to this process?", difficulty: 'Easy' },
            { id: 'ec-e-9', answer: "Faraday's laws of electrolysis.", description: "The amount of substance produced at an electrode was found to be directly proportional to the amount of charge passed through the cell. What laws describe this relationship?", difficulty: 'Hard' },
            { id: 'ec-e-10', answer: "The standard hydrogen electrode (SHE).", description: "A reference electrode with a standard potential defined as 0.00 V was used to measure the potentials of other half-cells. What is this reference electrode?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'ec-topic-water', name: 'Water Chemistry & Polymers', description: 'Properties of water and large-chain molecules.',
        challenges: [
            { id: 'ec-w-1', answer: "The water is hard.", description: "A water sample was found to contain high concentrations of Ca2+ and Mg2+ ions, which prevented soap from lathering easily. What is the term for this type of water?", difficulty: 'Easy' },
            { id: 'ec-w-2', answer: "Temporary hardness was removed by boiling.", description: "Hardness in water caused by bicarbonates of calcium and magnesium was removed by heating the water. What type of hardness is this?", difficulty: 'Medium' },
            { id: 'ec-w-3', answer: "The ion-exchange method was used.", description: "Hard water was passed through a resin that replaced Ca2+ and Mg2+ ions with Na+ ions to soften it. What is this process called?", difficulty: 'Medium' },
            { id: 'ec-w-4', answer: "Reverse osmosis was used.", description: "Water was purified by applying pressure to force it through a semi-permeable membrane, leaving dissolved salts behind. What is this purification method called?", difficulty: 'Medium' },
            { id: 'ec-w-5', answer: "The pH is 7.", description: "A sample of pure water at 25°C was tested. What is its expected pH?", difficulty: 'Easy' },
            { id: 'ec-w-6', answer: "They are monomers.", description: "Small, simple molecules like ethene were linked together to form a large polymer chain. What are these individual repeating units called?", difficulty: 'Easy' },
            { id: 'ec-w-7', answer: "Polymerization occurred.", description: "A chemical process linked many monomer units together to form a long-chain macromolecule. What is this process called?", difficulty: 'Easy' },
            { id: 'ec-w-8', answer: "It is a thermoplastic polymer.", description: "A polymer could be softened by heating and reshaped multiple times (e.g., Polyethylene). What category does this polymer fall into?", difficulty: 'Medium' },
            { id: 'ec-w-9', answer: "It is a thermosetting polymer.", description: "A polymer, once heated and set, became permanently hard and could not be reshaped (e.g., Bakelite). What category does this polymer fall into?", difficulty: 'Medium' },
            { id: 'ec-w-10', answer: "Vulcanization was performed.", description: "Natural rubber was heated with sulfur to improve its strength and elasticity by forming cross-links between polymer chains. What is this process called?", difficulty: 'Hard' },
        ]
    }
];

const PROGRAMMING_TOPICS: Topic[] = [
    {
        id: 'pps-topic-basics', name: 'Programming Basics', description: 'Fundamental concepts of programming in C.',
        challenges: [
            { id: 'pps-b-1', answer: "The output is 'Hello, World!'", description: "A C program used the printf() function. Explain the purpose of this function and the necessary header file.", difficulty: 'Easy' },
            { id: 'pps-b-2', answer: "The loop runs 10 times.", description: "A for loop was defined as 'for (int i = 0; i < 10; i++)'. Explain the three components of this for loop statement.", difficulty: 'Easy' },
            { id: 'pps-b-3', answer: "A single-line comment.", description: "The characters // were used in a C program. What do they signify?", difficulty: 'Easy' },
            { id: 'pps-b-4', answer: "The int data type was used.", description: "A variable was declared to store the whole number 42. What is the most appropriate fundamental data type in C for this?", difficulty: 'Easy' },
            { id: 'pps-b-5', answer: "The modulo operator (%).", description: "The remainder of the division 10 / 3 was found to be 1. What C operator is used to find the remainder?", difficulty: 'Easy' },
            { id: 'pps-b-6', answer: "The else block will execute.", description: "In an if-else statement, the condition 'if (5 > 10)' was evaluated. Which block of code will be executed?", difficulty: 'Easy' },
            { id: 'pps-b-7', answer: "The scanf() function was used.", description: "A program paused and waited for the user to type a number from the keyboard. What standard library function is commonly used for this?", difficulty: 'Medium' },
            { id: 'pps-b-8', answer: "The variable's value is 6.", description: "A variable 'x' with value 5 underwent the operation 'x++'. What is the new value of x?", difficulty: 'Easy' },
            { id: 'pps-b-9', answer: "The expression is true (1).", description: "The logical expression '(10 > 5) && (3 < 4)' was evaluated in C. What is the result?", difficulty: 'Medium' },
            { id: 'pps-b-10', answer: "A multi-line comment.", description: "A block of text in a C program was enclosed between /* and */. What does this signify?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'pps-topic-functions', name: 'Functions & Recursion', description: 'Organizing code into reusable blocks.',
        challenges: [
            { id: 'pps-f-1', answer: "The function returns an integer.", description: "A function was defined with the signature 'int calculateSum(...)'. What does the 'int' signify?", difficulty: 'Easy' },
            { id: 'pps-f-2', answer: "The function takes two integer arguments.", description: "A function was defined as 'void printValues(int a, int b)'. What are 'a' and 'b' called?", difficulty: 'Easy' },
            { id: 'pps-f-3', answer: "A function prototype was declared.", description: "A line like 'int multiply(int, int);' appeared at the top of a C file, before the main function. What is the purpose of this line?", difficulty: 'Medium' },
            { id: 'pps-f-4', answer: "A local variable.", description: "A variable was declared inside a function and was only accessible within that function. What is the scope of this variable?", difficulty: 'Easy' },
            { id: 'pps-f-5', answer: "A global variable.", description: "A variable was declared outside of any function and was accessible from all functions in the file. What is the scope of this variable?", difficulty: 'Easy' },
            { id: 'pps-f-6', answer: "The function is recursive.", description: "A function to calculate factorial called itself with a smaller value (e.g., factorial(n) called factorial(n-1)). What is this programming technique called?", difficulty: 'Medium' },
            { id: 'pps-f-7', answer: "A base case is needed.", description: "A recursive function ran forever and resulted in a stack overflow error. What essential component of a recursive function was likely missing?", difficulty: 'Medium' },
            { id: 'pps-f-8', answer: "The value 5 is returned.", description: "A function `int add(int x, int y){ return x+y; }` was called as `add(2, 3)`. What happens?", difficulty: 'Easy' },
            { id: 'pps-f-9', answer: "Pass by value was used.", description: "A variable from main() was passed to a function. When the function modified its parameter, the original variable in main() did not change. What parameter passing mechanism was used?", difficulty: 'Medium' },
            { id: 'pps-f-10', answer: "The function returns nothing.", description: "A function was defined with the signature 'void displayMessage(...)'. What does the 'void' signify?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'pps-topic-pointers', name: 'Pointers', description: 'Variables that store memory addresses.',
        challenges: [
            { id: 'pps-p-1', answer: "The address-of operator (&).", description: "To get the memory location of a variable 'x', an operator was used, like so: `&x`. What is this operator called?", difficulty: 'Easy' },
            { id: 'pps-p-2', answer: "A pointer to an integer.", description: "A variable was declared as `int *ptr;`. What does this declaration mean?", difficulty: 'Easy' },
            { id: 'pps-p-3', answer: "The dereference operator (*).", description: "To get the value stored at the memory address held by a pointer `ptr`, an operator was used, like so: `*ptr`. What is this operator called?", difficulty: 'Medium' },
            { id: 'pps-p-4', answer: "The function swaps two numbers using pointers.", description: "A function `void swap(int *a, int *b)` was implemented. Explain the concept of 'pass by reference' using pointers.", difficulty: 'Medium' },
            { id: 'pps-p-5', answer: "A NULL pointer.", description: "A pointer was initialized to not point to any valid memory location, often as `int *ptr = NULL;`. What is this called, and why is it good practice?", difficulty: 'Easy' },
            { id: 'pps-p-6', answer: "Dynamic memory allocation.", description: "The `malloc()` function was used to request a block of memory from the heap during program execution. What is this concept called?", difficulty: 'Medium' },
            { id: 'pps-p-7', answer: "The `free()` function should be used.", description: "After finishing with a block of memory allocated by `malloc()`, a specific function must be called to return the memory to the system and prevent memory leaks. What is this function?", difficulty: 'Medium' },
            { id: 'pps-p-8', answer: "A dangling pointer.", description: "A pointer continued to point to a memory location after `free()` had been called on that location. What is this dangerous type of pointer called?", difficulty: 'Hard' },
            { id: 'pps-p-9', answer: "Pointer arithmetic was performed.", description: "An integer pointer `ptr` was incremented (`ptr++`). The address it held increased by the size of an integer (e.g., 4 bytes). What is this operation called?", difficulty: 'Hard' },
            { id: 'pps-p-10', answer: "The value of 'x' is now 50.", description: "Given `int x = 10; int *ptr = &x; *ptr = 50;`, what is the final value of the variable 'x'?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'pps-topic-arrays', name: 'Arrays & Strings', description: 'Collections of data and sequences of characters.',
        challenges: [
            { id: 'pps-a-1', answer: "The array can hold 10 integers.", description: "An array was declared as `int numbers[10];`. What does this declaration mean?", difficulty: 'Easy' },
            { id: 'pps-a-2', answer: "The index is 0.", description: "To access the first element of an array `arr`, the expression `arr[?]` was used. What is the index of the first element in C?", difficulty: 'Easy' },
            { id: 'pps-a-3', answer: "The index is 9.", description: "To access the last element of an array `int arr[10];`, what index would be used?", difficulty: 'Easy' },
            { id: 'pps-a-4', answer: "The name of an array decays to a pointer to its first element.", description: "An array `int arr[5];` was passed to a function `void process(int *p)`. Why does this work?", difficulty: 'Medium' },
            { id: 'pps-a-5', answer: "A null terminator ('\\0').", description: "A sequence of characters in C, known as a string, must end with a special character to mark its end. What is this character?", difficulty: 'Medium' },
            { id: 'pps-a-6', answer: "The `strcpy()` function was used.", description: "The contents of one string were copied into another. What standard library function is commonly used for this?", difficulty: 'Easy' },
            { id: 'pps-a-7', answer: "The `strlen()` function was used.", description: "The number of characters in a string (excluding the null terminator) was counted. What standard library function does this?", difficulty: 'Easy' },
            { id: 'pps-a-8', answer: "A 2D array was declared.", description: "A variable was declared as `int matrix[3][4];`. What kind of data structure is this, often used to represent grids or matrices?", difficulty: 'Medium' },
            { id: 'pps-a-9', answer: "The `strcmp()` function was used.", description: "Two strings were compared lexicographically (alphabetically). What standard library function is used for this comparison?", difficulty: 'Medium' },
            { id: 'pps-a-10', answer: "An out-of-bounds access occurred.", description: "A program tried to access `arr[10]` in an array declared as `int arr[10];`, leading to undefined behavior. What is this common error called?", difficulty: 'Medium' },
        ]
    },
     {
        id: 'pps-topic-structures', name: 'Structures & File I/O', description: 'Custom data types and interacting with files.',
        challenges: [
            { id: 'pps-s-1', answer: "A structure was defined.", description: "A custom data type `struct Student` was created to group together a student's name, roll number, and marks. What is this C feature called?", difficulty: 'Easy' },
            { id: 'pps-s-2', answer: "The dot operator (.).", description: "To access the `roll_no` member of a structure variable `s1`, the expression `s1.roll_no` was used. What is this operator called?", difficulty: 'Easy' },
            { id: 'pps-s-3', answer: "The arrow operator (->).", description: "A pointer `ptr_s` pointed to a structure. To access the `name` member through the pointer, the expression `ptr_s->name` was used. What is this operator called?", difficulty: 'Medium' },
            { id: 'pps-s-4', answer: "A file pointer.", description: "A variable was declared as `FILE *fptr;`. What is this variable used for?", difficulty: 'Easy' },
            { id: 'pps-s-5', answer: "The `fopen()` function was used.", description: "To begin interacting with a file named 'data.txt', a standard library function was called to open it and return a file pointer. What is this function?", difficulty: 'Easy' },
            { id: 'pps-s-6', answer: "The file was opened in read mode ('r').", description: "A file was opened for the purpose of reading data from it. What mode specifier is used in `fopen()` for this?", difficulty: 'Easy' },
            { id: 'pps-s-7', answer: "The file was opened in write mode ('w').", description: "A file was opened for the purpose of writing data to it. If the file already existed, its contents were erased. What mode specifier is used for this?", difficulty: 'Easy' },
            { id: 'pps-s-8', answer: "The `fclose()` function was used.", description: "After all operations on a file were complete, a function was called to close the file and release the resources. What is this essential function?", difficulty: 'Easy' },
            { id: 'pps-s-9', answer: "The `fprintf()` function was used.", description: "Data was written to a file in a formatted way, similar to how `printf()` writes to the console. What function is used for this?", difficulty: 'Medium' },
            { id: 'pps-s-10', answer: "The `fscanf()` function was used.", description: "Data was read from a file in a formatted way, similar to how `scanf()` reads from the keyboard. What function is used for this?", difficulty: 'Medium' },
        ]
    }
];

const DATA_STRUCTURES_TOPICS: Topic[] = [
    {
        id: 'ds-topic-complexity', name: 'Algorithm Analysis', description: 'Analyzing the efficiency of algorithms.',
        challenges: [
            { id: 'ds-c-1', answer: "The time complexity is O(1).", description: "An algorithm accessed an element in an array by its index. Explain why this is a constant time operation.", difficulty: 'Easy' },
            { id: 'ds-c-2', answer: "The time complexity is O(n).", description: "An algorithm iterated through all elements of an array once using a single loop. What is its Big O time complexity?", difficulty: 'Easy' },
            { id: 'ds-c-3', answer: "The time complexity is O(n^2).", description: "An algorithm used a nested loop, where for each element, it looped through all other elements. What is its Big O time complexity?", difficulty: 'Medium' },
            { id: 'ds-c-4', answer: "The time complexity is O(log n).", description: "A binary search algorithm on a sorted array repeatedly divided the search interval in half. What is its Big O time complexity?", difficulty: 'Medium' },
            { id: 'ds-c-5', answer: "Space complexity.", description: "The amount of memory an algorithm requires in relation to the input size was analyzed. What is this measure of efficiency called?", difficulty: 'Easy' },
            { id: 'ds-c-6', answer: "Worst-case scenario.", description: "An algorithm's performance was analyzed based on the input that would cause it to take the longest time to complete. What is this analysis called?", difficulty: 'Easy' },
            { id: 'ds-c-7', answer: "Best-case scenario.", description: "The analysis focused on the input that would allow the algorithm to finish in the shortest possible time. What is this analysis called?", difficulty: 'Easy' },
            { id: 'ds-c-8', answer: "The time complexity is O(n log n).", description: "An efficient sorting algorithm like Merge Sort or Quick Sort was used. What is the typical time complexity for these algorithms?", difficulty: 'Medium' },
            { id: 'ds-c-9', answer: "The function grows faster.", description: "When comparing two algorithms, one with O(n^2) complexity and another with O(n), what does it mean for O(n^2) to have a higher complexity?", difficulty: 'Medium' },
            { id: 'ds-c-10', answer: "Omega Notation (Ω).", description: "A notation was used to describe the lower bound of an algorithm's running time (its best-case). What is this notation called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'ds-topic-linear', name: 'Linked Lists, Stacks, & Queues', description: 'Fundamental linear data structures.',
        challenges: [
            { id: 'ds-l-1', answer: "The value 'C' was popped.", description: "A stack initially held ['A', 'B']. 'C' was pushed. Then one value was popped. Explain the LIFO (Last-In, First-Out) principle.", difficulty: 'Easy' },
            { id: 'ds-l-2', answer: "The value 'A' was dequeued.", description: "A queue initially held ['A', 'B', 'C'] in that order. One value was dequeued. Explain the FIFO (First-In, First-Out) principle.", difficulty: 'Easy' },
            { id: 'ds-l-3', answer: "A singly linked list was used.", description: "A data structure consisted of nodes, where each node contained data and a pointer to the next node in the sequence. What is this structure called?", difficulty: 'Easy' },
            { id: 'ds-l-4', answer: "The head pointer was updated.", description: "A new node was added to the beginning of a linked list. What crucial pointer must be updated to maintain the list's integrity?", difficulty: 'Medium' },
            { id: 'ds-l-5', answer: "A doubly linked list was used.", description: "A data structure consisted of nodes, where each node contained data, a pointer to the next node, and a pointer to the previous node. What is this structure called?", difficulty: 'Medium' },
            { id: 'ds-l-6', answer: "A stack can be used to check for balanced parentheses.", description: "An algorithm was designed to validate expressions like `{[()]}`, pushing opening brackets and popping them when a matching closing bracket is found. What data structure is ideal for this?", difficulty: 'Medium' },
            { id: 'ds-l-7', answer: "A queue can be used to simulate a waiting line.", description: "A system needed to manage requests in the order they were received, like people lining up for a service. What data structure naturally models this behavior?", difficulty: 'Easy' },
            { id: 'ds-l-8', answer: "The time complexity is O(n).", description: "To find an element in an unsorted linked list, the list had to be traversed from the beginning. What is the worst-case time complexity for this search?", difficulty: 'Easy' },
            { id: 'ds-l-9', answer: "The time complexity is O(1).", description: "A new element was added to the beginning of a linked list (given a head pointer). What is the time complexity of this insertion?", difficulty: 'Medium' },
            { id: 'ds-l-10', answer: "A circular linked list was used.", description: "In a linked list, the 'next' pointer of the last node was made to point back to the first node. What is this type of linked list called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'ds-topic-nonlinear', name: 'Trees & Heaps', description: 'Hierarchical data structures.',
        challenges: [
            { id: 'ds-nl-1', answer: "The data structure is a Binary Search Tree (BST).", description: "A tree where for each node, all values in its left subtree are smaller, and all values in its right subtree are larger. Identify this structure.", difficulty: 'Medium' },
            { id: 'ds-nl-2', answer: "The root node.", description: "The topmost node in a tree data structure, which has no parent. What is this node called?", difficulty: 'Easy' },
            { id: 'ds-nl-3', answer: "Leaf nodes.", description: "Nodes in a tree that have no children. What are these nodes called?", difficulty: 'Easy' },
            { id: 'ds-nl-4', answer: "The height of the tree is 3.", description: "The longest path from the root node to a leaf node in a tree consisted of 3 edges. What does this number represent?", difficulty: 'Medium' },
            { id: 'ds-nl-5', answer: "In-order traversal was performed.", description: "A traversal of a BST visited the nodes in sorted ascending order. The pattern was: visit left subtree, visit root, visit right subtree. What is this traversal method called?", difficulty: 'Medium' },
            { id: 'ds-nl-6', answer: "Pre-order traversal was performed.", description: "A tree traversal followed the pattern: visit root, visit left subtree, visit right subtree. What is this traversal method called?", difficulty: 'Medium' },
            { id: 'ds-nl-7', answer: "Post-order traversal was performed.", description: "A tree traversal followed the pattern: visit left subtree, visit right subtree, visit root. What is this traversal method called?", difficulty: 'Medium' },
            { id: 'ds-nl-8', answer: "The tree is a complete binary tree.", description: "A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. What is this type of tree called?", difficulty: 'Hard' },
            { id: 'ds-nl-9', answer: "It is a Max-Heap.", description: "A complete binary tree where the value in each node is greater than or equal to the values in its children. What is this data structure?", difficulty: 'Hard' },
            { id: 'ds-nl-10', answer: "The search complexity is O(log n).", description: "A search was performed on a balanced Binary Search Tree. What is the average time complexity for this search?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'ds-topic-graphs', name: 'Graphs', description: 'Structures representing pairwise relationships between objects.',
        challenges: [
            { id: 'ds-g-1', answer: "An undirected graph was used.", description: "A graph representing a social network's friendships had edges with no specific direction. What type of graph is this?", difficulty: 'Easy' },
            { id: 'ds-g-2', answer: "A directed graph was used.", description: "A graph representing one-way streets in a city used edges with a specific direction. What type of graph is this?", difficulty: 'Easy' },
            { id: 'ds-g-3', answer: "An adjacency matrix.", description: "A graph was represented by a 2D array where the entry M[i][j] was 1 if there was an edge from vertex i to vertex j, and 0 otherwise. What is this representation called?", difficulty: 'Medium' },
            { id: 'ds-g-4', answer: "An adjacency list.", description: "A graph was represented by an array of lists, where the list at index 'i' contained all vertices adjacent to vertex 'i'. What is this representation called?", difficulty: 'Medium' },
            { id: 'ds-g-5', answer: "A Breadth-First Search (BFS) was used.", description: "An algorithm explored a graph level by level from a starting node, using a queue. Identify this graph traversal algorithm.", difficulty: 'Medium' },
            { id: 'ds-g-6', answer: "A Depth-First Search (DFS) was used.", description: "An algorithm explored a graph by going as deep as possible down one branch before backtracking, using a stack. Identify this algorithm.", difficulty: 'Medium' },
            { id: 'ds-g-7', answer: "Dijkstra's algorithm was used.", description: "The shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights was found. What famous algorithm is used for this?", difficulty: 'Hard' },
            { id: 'ds-g-8', answer: "A cycle was detected.", description: "During a traversal of a graph, a path was found that started and ended at the same vertex. What is this path called?", difficulty: 'Easy' },
            { id: 'ds-g-9', answer: "A weighted graph.", description: "A graph representing a road network had a number (representing distance or cost) associated with each edge. What type of graph is this?", difficulty: 'Easy' },
            { id: 'ds-g-10', answer: "Kruskal's or Prim's algorithm was used.", description: "A sub-graph was found that connects all the vertices together, without any cycles and with the minimum possible total edge weight. What is this structure called, and name an algorithm to find it.", difficulty: 'Hard' },
        ]
    },
    {
        id: 'ds-topic-hashing', name: 'Hashing & Sorting', description: 'Efficiently organizing and retrieving data.',
        challenges: [
            { id: 'ds-hs-1', answer: "A hash collision occurred.", description: "In a hash table, two different keys were mapped to the same index. What is this event called?", difficulty: 'Medium' },
            { id: 'ds-hs-2', answer: "Separate chaining was used.", description: "To resolve hash collisions, each bucket in the hash table was made a linked list of all keys that hash to that index. What is this collision resolution technique called?", difficulty: 'Medium' },
            { id: 'ds-hs-3', answer: "A good hash function.", description: "A function was designed to map keys to indices in a hash table as uniformly as possible to minimize collisions. What is this function called?", difficulty: 'Easy' },
            { id: 'ds-hs-4', answer: "The time complexity is O(1) on average.", description: "An element was retrieved from a well-distributed hash table. What is the average time complexity for this operation?", difficulty: 'Medium' },
            { id: 'ds-hs-5', answer: "Bubble Sort was used.", description: "A simple sorting algorithm repeatedly stepped through the list, compared adjacent elements and swapped them if they were in the wrong order. What is this O(n^2) algorithm?", difficulty: 'Easy' },
            { id: 'ds-hs-6', answer: "Selection Sort was used.", description: "A sorting algorithm repeatedly found the minimum element from the unsorted part and put it at the beginning. What is this O(n^2) algorithm?", difficulty: 'Easy' },
            { id: 'ds-hs-7', answer: "Insertion Sort was used.", description: "A sorting algorithm built the final sorted array one item at a time, inserting each new item into its proper place. What is this O(n^2) algorithm?", difficulty: 'Easy' },
            { id: 'ds-hs-8', answer: "Merge Sort was used.", description: "A sorting algorithm used a 'divide and conquer' strategy, recursively splitting the array in half, sorting the halves, and then merging them. What is this O(n log n) algorithm?", difficulty: 'Medium' },
            { id: 'ds-hs-9', answer: "Quick Sort was used.", description: "A sorting algorithm used a 'divide and conquer' strategy by picking a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. What is this O(n log n) average-case algorithm?", difficulty: 'Medium' },
            { id: 'ds-hs-10', answer: "The algorithm is stable.", description: "A sorting algorithm maintained the relative order of records with equal keys. What property is this called?", difficulty: 'Hard' },
        ]
    }
];

const OPERATING_SYSTEMS_TOPICS: Topic[] = [
    {
        id: 'os-topic-intro', name: 'OS Introduction', description: 'Core concepts and structure of Operating Systems.',
        challenges: [
            { id: 'os-i-1', answer: "The kernel.", description: "The core component of an operating system that manages the system's resources and provides essential services. What is it called?", difficulty: 'Easy' },
            { id: 'os-i-2', answer: "A system call.", description: "A user program needed to request a service from the OS kernel, such as opening a file. What is the mechanism for this request?", difficulty: 'Medium' },
            { id: 'os-i-3', answer: "A monolithic kernel.", description: "An OS architecture where the entire operating system is working in the kernel space. What is this type of kernel architecture called?", difficulty: 'Medium' },
            { id: 'os-i-4', answer: "A microkernel.", description: "An OS architecture where only the most fundamental services are in the kernel, while other services (like file systems, device drivers) run in user space. What is this called?", difficulty: 'Hard' },
            { id: 'os-i-5', answer: "A dual-mode operation (user mode and kernel mode).", description: "The OS protects itself by having a hardware-supported mechanism that provides two separate modes of operation. What are these modes?", difficulty: 'Medium' },
            { id: 'os-i-6', answer: "Multitasking.", description: "An operating system's ability to allow multiple programs to run concurrently, sharing the CPU. What is this feature called?", difficulty: 'Easy' },
            { id: 'os-i-7', answer: "The shell.", description: "A command-line interface was used to interact with the operating system. What is this program often called?", difficulty: 'Easy' },
            { id: 'os-i-8', answer: "Virtual memory.", description: "A memory management technique where secondary memory can be used as if it were part of the main memory. What is this called?", difficulty: 'Medium' },
            { id: 'os-i-9', answer: "A device driver.", description: "A specific piece of software that allows the operating system to communicate with a hardware device like a printer or a graphics card. What is it called?", difficulty: 'Easy' },
            { id: 'os-i-10', answer: "The BIOS/UEFI.", description: "A piece of firmware that runs when a computer is first powered on, responsible for initializing hardware and loading the operating system. What is it called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'os-topic-process', name: 'Process Management', description: 'How the OS handles programs in execution.',
        challenges: [
            { id: 'os-p-1', answer: "A process.", description: "A program in the state of execution. What is the OS term for this?", difficulty: 'Easy' },
            { id: 'os-p-2', answer: "The Process Control Block (PCB).", description: "A data structure in the OS kernel that contains all information about a process, like its state, program counter, CPU registers, etc. What is it called?", difficulty: 'Medium' },
            { id: 'os-p-3', answer: "Ready state.", description: "A process was loaded into memory and was waiting to be assigned to the CPU for execution. What state is it in?", difficulty: 'Easy' },
            { id: 'os-p-4', answer: "Running state.", description: "A process's instructions were being executed by the CPU. What state is it in?", difficulty: 'Easy' },
            { id: 'os-p-5', answer: "Waiting state.", description: "A process was waiting for some event to occur, such as the completion of an I/O operation. What state is it in?", difficulty: 'Easy' },
            { id: 'os-p-6', answer: "A context switch.", description: "The OS saved the state of the currently running process and loaded the saved state of another process to start executing it. What is this procedure called?", difficulty: 'Medium' },
            { id: 'os-p-7', answer: "A thread.", description: "A lightweight unit of CPU utilization within a process that can be scheduled independently. What is it called?", difficulty: 'Medium' },
            { id: 'os-p-8', answer: "Inter-Process Communication (IPC).", description: "Two processes needed to exchange data with each other using mechanisms like pipes or shared memory. What is this called?", difficulty: 'Medium' },
            { id: 'os-p-9', answer: "The fork() system call.", description: "A process created a new child process that was a duplicate of itself. What is a Unix system call is used for this?", difficulty: 'Hard' },
            { id: 'os-p-10', answer: "A zombie process.", description: "A process has completed execution but still has an entry in the process table, waiting for its parent process to read its exit status. What is this process called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'os-topic-scheduling', name: 'CPU Scheduling', description: 'Algorithms to decide which process gets the CPU.',
        challenges: [
            { id: 'os-s-1', answer: "First-Come, First-Served (FCFS).", description: "A scheduling algorithm where the process that requests the CPU first is allocated the CPU first. What is this simple algorithm?", difficulty: 'Easy' },
            { id: 'os-s-2', answer: "Shortest-Job-First (SJF).", description: "A scheduling algorithm that selects the waiting process with the smallest execution time to execute next. This is provably optimal for minimizing average waiting time. What is it?", difficulty: 'Medium' },
            { id: 'os-s-3', answer: "Round Robin (RR).", description: "A scheduling algorithm designed for time-sharing systems where each process gets a small unit of CPU time (a time quantum). If it doesn't finish, it's moved to the end of the ready queue. What is this?", difficulty: 'Medium' },
            { id: 'os-s-4', answer: "Priority Scheduling.", description: "A scheduling algorithm where a priority is associated with each process, and the CPU is allocated to the process with the highest priority. What is it?", difficulty: 'Easy' },
            { id: 'os-s-5', answer: "The convoy effect.", description: "In an FCFS scheduler, a long process was followed by many short processes, causing the short processes to wait a very long time. What is this phenomenon called?", difficulty: 'Medium' },
            { id: 'os-s-6', answer: "Preemptive scheduling.", description: "A scheduling approach where the OS can interrupt a running process and forcibly take the CPU away to give it to another process. What is this called?", difficulty: 'Medium' },
            { id: 'os-s-7', answer: "Non-preemptive scheduling.", description: "A scheduling approach where once the CPU has been allocated to a process, the process keeps the CPU until it releases it, either by terminating or by switching to the waiting state. What is this called?", difficulty: 'Medium' },
            { id: 'os-s-8', answer: "Turnaround time.", description: "The total time taken between the submission of a process and its completion was measured. What is this metric called?", difficulty: 'Easy' },
            { id: 'os-s-9', answer: "Waiting time.", description: "The total amount of time a process has been spending in the ready queue was measured. What is this metric called?", difficulty: 'Easy' },
            { id: 'os-s-10', answer: "Starvation.", description: "In a priority scheduling system, a low-priority process was indefinitely postponed because higher-priority processes kept arriving. What is this problem called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'os-topic-sync', name: 'Synchronization', description: 'Managing access to shared resources by multiple processes.',
        challenges: [
            { id: 'os-sy-1', answer: "A race condition.", description: "The outcome of an execution depended on the particular order in which multiple processes accessed and manipulated a shared resource. What is this undesirable situation called?", difficulty: 'Medium' },
            { id: 'os-sy-2', answer: "The critical section.", description: "A segment of code in a process where shared resources are accessed. What is this section called?", difficulty: 'Easy' },
            { id: 'os-sy-3', answer: "Mutual exclusion.", description: "A property of a synchronization solution ensuring that if one process is executing in its critical section, then no other processes can be executing in their critical sections. What is this property?", difficulty: 'Medium' },
            { id: 'os-sy-4', answer: "A semaphore.", description: "A synchronization tool was used, which is an integer variable that, apart from initialization, is accessed only through two standard atomic operations: wait() and signal(). What is this tool, invented by Dijkstra?", difficulty: 'Hard' },
            { id: 'os-sy-5', answer: "A mutex lock.", description: "A simple synchronization tool was used to provide mutual exclusion, which has two states: locked and unlocked. A process must acquire the lock before entering a critical section and release it when it exits. What is this called?", difficulty: 'Medium' },
            { id: 'os-sy-6', answer: "A deadlock.", description: "A set of processes was blocked because each process was holding a resource and waiting for another resource acquired by some other process in the set. What is this situation called?", difficulty: 'Medium' },
            { id: 'os-sy-7', answer: "The Dining Philosophers Problem.", description: "A classic synchronization problem involves five philosophers sitting at a circular table with five chopsticks, illustrating the problem of deadlock and starvation. What is this problem called?", difficulty: 'Hard' },
            { id: 'os-sy-8', answer: "Hold and Wait.", description: "One of the four necessary conditions for deadlock, where a process holds at least one resource and is waiting to acquire additional resources held by other processes. Name this condition.", difficulty: 'Medium' },
            { id: 'os-sy-9', answer: "Circular Wait.", description: "One of the four necessary conditions for deadlock, where there exists a set of waiting processes {P0, P1, ..., Pn} such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, ..., and Pn is waiting for a resource held by P0. Name this condition.", difficulty: 'Medium' },
            { id: 'os-sy-10', answer: "A monitor.", description: "A high-level synchronization construct that provides a convenient and effective mechanism for process synchronization, where only one process can be active at a time within it. What is this abstract data type called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'os-topic-memory', name: 'Memory Management', description: 'How the OS allocates and manages main memory.',
        challenges: [
            { id: 'os-m-1', answer: "Paging.", description: "A memory management scheme that permits a process's physical address space to be non-contiguous. It divides logical memory into blocks of the same size. What are these blocks called, and what is the scheme?", difficulty: 'Medium' },
            { id: 'os-m-2', answer: "A page table.", description: "A data structure used by the virtual memory system to store the mapping between logical addresses and physical addresses. What is it called?", difficulty: 'Medium' },
            { id: 'os-m-3', answer: "Segmentation.", description: "A memory-management scheme that supports the user view of memory, dividing a program into logical units like main program, procedure, function, local variables, etc. What is this scheme?", difficulty: 'Medium' },
            { id: 'os-m-4', answer: "A page fault.", description: "The hardware trapped to the OS when a process tried to access a page that was not currently in main memory. What is this event called?", difficulty: 'Medium' },
            { id: 'os-m-5', answer: "Thrashing.", description: "A system was spending more time paging (swapping pages between memory and disk) than executing. The high page fault rate led to very poor performance. What is this phenomenon called?", difficulty: 'Hard' },
            { id: 'os-m-6', answer: "The First-Fit algorithm was used.", description: "A dynamic storage allocation algorithm that allocates the first hole that is big enough. What is it called?", difficulty: 'Easy' },
            { id: 'os-m-7', answer: "The Best-Fit algorithm was used.", description: "A dynamic storage allocation algorithm that allocates the smallest hole that is big enough. What is it called?", difficulty: 'Easy' },
            { id: 'os-m-8', answer: "External fragmentation.", description: "A situation where there is enough total memory space to satisfy a request, but it is not contiguous; it is scattered into small, non-contiguous holes. What is this problem called?", difficulty: 'Medium' },
            { id: 'os-m-9', answer: "Internal fragmentation.", description: "Memory was allocated in fixed-size blocks (pages), and the memory allocated to a process was slightly larger than the requested memory. The unused space within the allocated block is called what?", difficulty: 'Medium' },
            { id: 'os-m-10', answer: "The Translation Look-aside Buffer (TLB).", description: "A special, small, fast-lookup hardware cache was used to speed up the translation of logical to physical addresses. What is this cache called?", difficulty: 'Hard' },
        ]
    }
];

const DBMS_TOPICS: Topic[] = [
    {
        id: 'dbms-topic-intro', name: 'Introduction to DBMS', description: 'Fundamental concepts of database management systems.',
        challenges: [
            { id: 'dbms-i-1', answer: "A database.", description: "A structured collection of data, typically stored electronically. What is this called?", difficulty: 'Easy' },
            { id: 'dbms-i-2', answer: "A DBMS (Database Management System).", description: "Software that interacts with users, applications, and the database itself to capture and analyze data (e.g., MySQL, Oracle). What is this software called?", difficulty: 'Easy' },
            { id: 'dbms-i-3', answer: "Data independence.", description: "The ability to modify a schema definition in one level without affecting a schema definition in the next higher level. What is this important DBMS concept called?", difficulty: 'Medium' },
            { id: 'dbms-i-4', answer: "A relational model.", description: "A database model based on first-order predicate logic, where all data is represented in terms of tuples, grouped into relations. What is this widely used model called?", difficulty: 'Easy' },
            { id: 'dbms-i-5', answer: "A table (or relation).", description: "In a relational database, data is organized into structures consisting of rows and columns. What is this structure called?", difficulty: 'Easy' },
            { id: 'dbms-i-6', answer: "A row (or tuple).", description: "A single entry or record in a database table. What is it called?", difficulty: 'Easy' },
            { id: 'dbms-i-7', answer: "A column (or attribute).", description: "A named field of a table that defines the type of data it holds. What is it called?", difficulty: 'Easy' },
            { id: 'dbms-i-8', answer: "SQL (Structured Query Language).", description: "A standardized language used to manage and manipulate relational databases. What is it?", difficulty: 'Easy' },
            { id: 'dbms-i-9', answer: "DDL (Data Definition Language).", description: "The subset of SQL commands used to define the database schema (e.g., CREATE TABLE, ALTER TABLE). What is this subset called?", difficulty: 'Medium' },
            { id: 'dbms-i-10', answer: "DML (Data Manipulation Language).", description: "The subset of SQL commands used to manipulate the data within the schema (e.g., INSERT, UPDATE, DELETE). What is this subset called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'dbms-topic-keys', name: 'Keys & Constraints', description: 'Ensuring data integrity and relationships.',
        challenges: [
            { id: 'dbms-k-1', answer: "A primary key.", description: "An attribute or set of attributes that uniquely identifies each record in a table. What is this constraint called?", difficulty: 'Easy' },
            { id: 'dbms-k-2', answer: "A foreign key.", description: "A key used to link two tables together. It is a field in one table that refers to the primary key in another table. What is this called?", difficulty: 'Easy' },
            { id: 'dbms-k-3', answer: "A superkey.", description: "A set of one or more attributes that, taken collectively, allows us to identify uniquely a tuple in a relation. What is this called?", difficulty: 'Medium' },
            { id: 'dbms-k-4', answer: "A candidate key.", description: "A minimal superkey; a superkey for which no proper subset is also a superkey. What is this called?", difficulty: 'Hard' },
            { id: 'dbms-k-5', answer: "The entity integrity constraint.", description: "A rule that states that no primary key value can be NULL. What is this constraint called?", difficulty: 'Medium' },
            { id: 'dbms-k-6', answer: "The referential integrity constraint.", description: "A rule that ensures that a value that appears in one relation for a given set of attributes also appears for a certain set of attributes in another relation (i.e., foreign key must match a primary key or be NULL). What is this?", difficulty: 'Medium' },
            { id: 'dbms-k-7', answer: "A composite key.", description: "A primary key that consists of two or more attributes. What is this called?", difficulty: 'Medium' },
            { id: 'dbms-k-8', answer: "The UNIQUE constraint.", description: "A constraint was used to ensure that all values in a column are different (but allows for one NULL value). What is this constraint?", difficulty: 'Easy' },
            { id: 'dbms-k-9', answer: "The NOT NULL constraint.", description: "A constraint was used to ensure that a column cannot have a NULL value. What is it?", difficulty: 'Easy' },
            { id: 'dbms-k-10', answer: "The CHECK constraint.", description: "A constraint was used to limit the value range that can be placed in a column (e.g., Age > 18). What is it called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'dbms-topic-sql', name: 'SQL Queries', description: 'Retrieving and manipulating data using SQL.',
        challenges: [
            { id: 'dbms-s-1', answer: "The SELECT statement was used.", description: "To retrieve data from a database table called 'Students'. What is the primary SQL command for data retrieval?", difficulty: 'Easy' },
            { id: 'dbms-s-2', answer: "The WHERE clause was used.", description: "To filter the results of a SELECT statement to include only students with marks greater than 90. What clause is used for filtering?", difficulty: 'Easy' },
            { id: 'dbms-s-3', answer: "The ORDER BY clause was used.", description: "The results of a query were sorted in descending order of marks. What SQL clause is used for sorting?", difficulty: 'Easy' },
            { id: 'dbms-s-4', answer: "An INNER JOIN was performed.", description: "A query combined rows from two tables ('Students' and 'Courses') based on a related column between them (e.g., student_id). What type of operation is this?", difficulty: 'Medium' },
            { id: 'dbms-s-5', answer: "A LEFT JOIN was performed.", description: "A query returned all records from the left table ('Students'), and the matched records from the right table ('Enrollments'). If there was no match, the right side was NULL. What join is this?", difficulty: 'Medium' },
            { id: 'dbms-s-6', answer: "The GROUP BY clause was used.", description: "A query was used to group rows that have the same values in a column (e.g., 'branch') into summary rows. It was used with an aggregate function like COUNT(). What clause is this?", difficulty: 'Medium' },
            { id: 'dbms-s-7', answer: "The HAVING clause was used.", description: "After grouping the data, a filter was applied to the groups (e.g., only show branches having more than 100 students). What clause is used for filtering groups?", difficulty: 'Hard' },
            { id: 'dbms-s-8', answer: "The INSERT INTO statement was used.", description: "A new record for a new student was added to the 'Students' table. What SQL command is used for this?", difficulty: 'Easy' },
            { id: 'dbms-s-9', answer: "The UPDATE statement was used.", description: "A student's phone number was changed in the 'Students' table. What SQL command is used to modify existing records?", difficulty: 'Easy' },
            { id: 'dbms-s-10', answer: "The DELETE statement was used.", description: "A student's record was removed from the 'Students' table. What SQL command is used for this?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'dbms-topic-norm', name: 'Normalization', description: 'Organizing columns and tables to minimize data redundancy.',
        challenges: [
            { id: 'dbms-n-1', answer: "Data redundancy.", description: "The same piece of information (e.g., a student's address) was stored in multiple places in the database. What is this problem called?", difficulty: 'Easy' },
            { id: 'dbms-n-2', answer: "An update anomaly.", description: "Because of data redundancy, updating a student's address required changing it in multiple records, and one of them was missed, leading to inconsistent data. What is this problem called?", difficulty: 'Medium' },
            { id: 'dbms-n-3', answer: "First Normal Form (1NF).", description: "A table was modified to ensure that all its attributes contain only atomic (indivisible) values and each record is unique. What level of normalization is this?", difficulty: 'Easy' },
            { id: 'dbms-n-4', answer: "A partial dependency was removed.", description: "A table was in 1NF. It was then modified so that all its non-key attributes were fully functionally dependent on the primary key. This addressed an issue where a non-key attribute depended on only a part of the composite primary key. What was removed?", difficulty: 'Medium' },
            { id: 'dbms-n-5', answer: "Second Normal Form (2NF).", description: "After removing all partial dependencies from a 1NF table, what normal form has been achieved?", difficulty: 'Medium' },
            { id: 'dbms-n-6', answer: "A transitive dependency was removed.", description: "A table was in 2NF. It was then modified to remove dependencies where a non-key attribute depended on another non-key attribute. What was removed?", difficulty: 'Hard' },
            { id: 'dbms-n-7', answer: "Third Normal Form (3NF).", description: "After removing all transitive dependencies from a 2NF table, what normal form has been achieved?", difficulty: 'Hard' },
            { id: 'dbms-n-8', answer: "A functional dependency.", description: "A relationship exists between two attributes, where the value of one attribute (e.g., StudentID) determines the value of another attribute (e.g., StudentName). What is this relationship called?", difficulty: 'Medium' },
            { id: 'dbms-n-9', answer: "Denormalization.", description: "For performance reasons (to reduce the number of joins), a database design was intentionally made to violate a normal form by adding redundant data. What is this process called?", difficulty: 'Medium' },
            { id: 'dbms-n-10', answer: "Boyce-Codd Normal Form (BCNF).", description: "A stricter version of 3NF, this normal form was achieved when for every non-trivial functional dependency X -> Y, X is a superkey. What is this normal form?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'dbms-topic-trans', name: 'Transactions & Concurrency', description: 'Ensuring data integrity in a multi-user environment.',
        challenges: [
            { id: 'dbms-t-1', answer: "A transaction.", description: "A sequence of operations performed as a single logical unit of work (e.g., transferring money from one bank account to another). What is this called?", difficulty: 'Easy' },
            { id: 'dbms-t-2', answer: "Atomicity.", description: "One of the four key properties of transactions (ACID), it ensures that all operations within a transaction are completed successfully; otherwise, the transaction is aborted, and the database remains unchanged. What is this 'all or nothing' property?", difficulty: 'Medium' },
            { id: 'dbms-t-3', answer: "Consistency.", description: "One of the ACID properties, it ensures that a transaction brings the database from one valid state to another. What is this property?", difficulty: 'Medium' },
            { id: 'dbms-t-4', answer: "Isolation.", description: "One of the ACID properties, it ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially. What is this property?", difficulty: 'Medium' },
            { id: 'dbms-t-5', answer: "Durability.", description: "One of the ACID properties, it ensures that once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors. What is this property?", difficulty: 'Medium' },
            { id: 'dbms-t-6', answer: "A COMMIT statement was executed.", description: "After a transaction successfully completed all its steps, a command was issued to save the changes permanently. What is this command?", difficulty: 'Easy' },
            { id: 'dbms-t-7', answer: "A ROLLBACK statement was executed.", description: "An error occurred during a transaction, and a command was issued to undo all the changes made by that transaction. What is this command?", difficulty: 'Easy' },
            { id: 'dbms-t-8', answer: "A lock was acquired.", description: "To prevent two transactions from modifying the same piece of data simultaneously, a mechanism was used to reserve that data for one transaction. What is this mechanism called?", difficulty: 'Medium' },
            { id: 'dbms-t-9', answer: "A two-phase locking (2PL) protocol was used.", description: "A concurrency control protocol that ensures serializability by dividing a transaction's life into a 'growing phase' (acquiring locks) and a 'shrinking phase' (releasing locks). What is this protocol?", difficulty: 'Hard' },
            { id: 'dbms-t-10', answer: "A deadlock.", description: "Transaction T1 was waiting for a lock held by T2, and T2 was waiting for a lock held by T1. What is this concurrency problem called?", difficulty: 'Medium' },
        ]
    }
];

const DIGITAL_LOGIC_DESIGN_TOPICS: Topic[] = [
    {
        id: 'dld-topic-numbers', name: 'Number Systems', description: 'Different bases for representing numbers in digital systems.',
        challenges: [
            { id: 'dld-n-1', answer: "The number is 1010.", description: "The decimal number 10 was converted to binary. What is the result?", difficulty: 'Easy' },
            { id: 'dld-n-2', answer: "The number is 13.", description: "The binary number 1101 was converted to decimal. What is the result?", difficulty: 'Easy' },
            { id: 'dld-n-3', answer: "The number is A.", description: "The decimal number 10 was converted to hexadecimal. What is the result?", difficulty: 'Easy' },
            { id: 'dld-n-4', answer: "The number is 255.", description: "The hexadecimal number FF was converted to decimal. What is the result?", difficulty: 'Medium' },
            { id: 'dld-n-5', answer: "Two's complement was used.", description: "A method was used to represent signed (positive and negative) binary numbers, which makes binary subtraction easier. What is this common method called?", difficulty: 'Medium' },
            { id: 'dld-n-6', answer: "The result is 11110.", description: "The binary number 11001 had its one's complement calculated. Explain the process and give the result.", difficulty: 'Medium' },
            { id: 'dld-n-7', answer: "The number is 11011.", description: "The decimal number 27 was converted to binary. What is the result?", difficulty: 'Easy' },
            { id: 'dld-n-8', answer: "The number is 3F.", description: "The decimal number 63 was converted to hexadecimal. What is the result?", difficulty: 'Medium' },
            { id: 'dld-n-9', answer: "Gray code.", description: "A binary numeral system was used where two successive values differ in only one bit. What is this code called?", difficulty: 'Hard' },
            // FIX: Corrected typo from `id::` to `id:`.
            { id: 'dld-n-10', answer: "BCD (Binary Coded Decimal).", description: "Each decimal digit was represented by its own separate 4-bit binary number. For example, 23 was represented as 0010 0011. What is this encoding scheme?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'dld-topic-gates', name: 'Logic Gates & Boolean Algebra', description: 'The fundamental building blocks and mathematics of digital circuits.',
        challenges: [
            { id: 'dld-g-1', answer: "The output is 1.", description: "An AND gate had two inputs, both set to 1. What is the output?", difficulty: 'Easy' },
            { id: 'dld-g-2', answer: "The output is 0.", description: "An AND gate had one input set to 1 and the other to 0. What is the output?", difficulty: 'Easy' },
            { id: 'dld-g-3', answer: "The output is 1.", description: "An OR gate had one input set to 1 and the other to 0. What is the output?", difficulty: 'Easy' },
            { id: 'dld-g-4', answer: "The output is 0.", description: "An OR gate had two inputs, both set to 0. What is the output?", difficulty: 'Easy' },
            { id: 'dld-g-5', answer: "The output is 0.", description: "A NOT gate (inverter) had an input of 1. What is the output?", difficulty: 'Easy' },
            { id: 'dld-g-6', answer: "The output is 1.", description: "A XOR gate had one input set to 1 and the other to 0. What is the output?", difficulty: 'Medium' },
            { id: 'dld-g-7', answer: "The output is 0.", description: "A XOR gate had two inputs, both set to 1. What is the output?", difficulty: 'Medium' },
            { id: 'dld-g-8', answer: "De Morgan's Laws.", description: "The expression !(A && B) was shown to be equivalent to !A || !B. What set of rules in Boolean algebra governs this transformation?", difficulty: 'Medium' },
            { id: 'dld-g-9', answer: "A NAND gate.", description: "A universal gate was used, from which any other logic gate can be constructed. It is equivalent to an AND gate followed by a NOT gate. What is it?", difficulty: 'Medium' },
            { id: 'dld-g-10', answer: "The simplified expression is A.", description: "The Boolean expression A + AB was simplified using absorption law. What is the result?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'dld-topic-combo', name: 'Combinational Circuits', description: 'Circuits whose output depends only on the current inputs.',
        challenges: [
            { id: 'dld-c-1', answer: "A half adder.", description: "A combinational circuit was built to add two single binary digits, producing a sum and a carry output. What is this circuit called?", difficulty: 'Easy' },
            { id: 'dld-c-2', answer: "A full adder.", description: "A combinational circuit was built to add three single binary digits (two inputs and a carry-in), producing a sum and a carry-out. What is this circuit?", difficulty: 'Medium' },
            { id: 'dld-c-3', answer: "A multiplexer (MUX).", description: "A circuit was used to select one of several input signals and forward it to a single output. It had 'n' select lines to choose from 2^n inputs. What is this circuit?", difficulty: 'Medium' },
            { id: 'dld-c-4', answer: "A demultiplexer (DEMUX).", description: "A circuit took one data input and distributed it to one of several output lines, based on the value of its select lines. What is this circuit?", difficulty: 'Medium' },
            { id: 'dld-c-5', answer: "A decoder.", description: "A circuit converted a binary code from 'n' input lines into 2^n unique output lines. For example, a 2-to-4 decoder. What is this circuit?", difficulty: 'Medium' },
            { id: 'dld-c-6', answer: "An encoder.", description: "A circuit had 2^n input lines and 'n' output lines, and it produced the binary code corresponding to the input that was active. What is this circuit?", difficulty: 'Medium' },
            { id: 'dld-c-7', answer: "A comparator.", description: "A combinational circuit was designed to compare two binary numbers (A and B) and output whether A > B, A = B, or A < B. What is this circuit?", difficulty: 'Hard' },
            { id: 'dld-c-8', answer: "A Karnaugh Map (K-map) was used.", description: "A graphical method was used to simplify a Boolean algebra expression by grouping adjacent 1s in a special grid representing the truth table. What is this method?", difficulty: 'Hard' },
            { id: 'dld-c-9', answer: "A parity generator.", description: "A circuit was designed to take an n-bit binary number and add an extra bit to it so that the total number of 1s is either even or odd, for error detection purposes. What is this circuit?", difficulty: 'Hard' },
            { id: 'dld-c-10', answer: "A Read-Only Memory (ROM).", description: "A combinational circuit was implemented as a memory device where a decoder generates minterms and an OR gate array combines them to produce the desired functions. This describes the structure of what component?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'dld-topic-seq', name: 'Sequential Circuits', description: 'Circuits whose output depends on current inputs and past states.',
        challenges: [
            { id: 'dld-s-1', answer: "A latch.", description: "A simple sequential circuit was built that has two stable states and can be used to store one bit of information. It is level-sensitive. What is this basic memory element?", difficulty: 'Easy' },
            { id: 'dld-s-2', answer: "A flip-flop.", description: "A sequential circuit that is an advancement of the latch, which changes its output state only at a specific point of a clock signal (edge-triggered). What is this memory element?", difficulty: 'Easy' },
            { id: 'dld-s-3', answer: "An SR latch.", description: "A basic latch was built with two inputs, S (Set) and R (Reset). What is it called?", difficulty: 'Medium' },
            { id: 'dld-s-4', answer: "A D flip-flop.", description: "A flip-flop was used where the output (Q) simply takes on the value of the input (D) on the triggering edge of the clock. It's often used in shift registers. What is it?", difficulty: 'Medium' },
            { id: 'dld-s-5', answer: "A JK flip-flop.", description: "A versatile flip-flop has J and K inputs. When both are 1, its output toggles on the clock edge. What is it?", difficulty: 'Medium' },
            { id: 'dld-s-6', answer: "A shift register.", description: "A group of flip-flops was connected in a chain so that the output of one flip-flop becomes the input of the next one, allowing bits to be shifted along the chain. What is this circuit?", difficulty: 'Medium' },
            { id: 'dld-s-7', answer: "A counter.", description: "A sequential circuit was designed to go through a predetermined sequence of states on the application of clock pulses. For example, counting from 00 to 11. What is this circuit?", difficulty: 'Easy' },
            { id: 'dld-s-8', answer: "An asynchronous counter (ripple counter).", description: "In a counter, the output of one flip-flop was used as the clock input for the next flip-flop. What type of counter is this?", difficulty: 'Hard' },
            { id: 'dld-s-9', answer: "A synchronous counter.", description: "In a counter, all flip-flops were triggered by the same common clock signal. What type of counter is this?", difficulty: 'Hard' },
            { id: 'dld-s-10', answer: "A state machine was designed.", description: "A circuit's behavior was modeled with a state diagram, showing states, transitions between states based on inputs, and outputs. What is this abstract machine called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'dld-topic-memory-arch', name: 'Memory & Architecture', description: 'How memory is organized and integrated into computer systems.',
        challenges: [
            { id: 'dld-ma-1', answer: "Random Access Memory (RAM).", description: "A type of volatile computer memory that can be read from and written to, where any byte of memory can be accessed without touching the preceding bytes. What is it?", difficulty: 'Easy' },
            { id: 'dld-ma-2', answer: "Read-Only Memory (ROM).", description: "A type of non-volatile memory used in computers and other electronic devices, where the data stored cannot be electronically modified after manufacture. What is it?", difficulty: 'Easy' },
            { id: 'dld-ma-3', answer: "SRAM (Static RAM).", description: "A type of RAM that uses bistable latching circuitry (flip-flops) to store each bit. It is faster but less dense than DRAM. What is it?", difficulty: 'Medium' },
            { id: 'dld-ma-4', answer: "DRAM (Dynamic RAM).", description: "A type of RAM that stores each bit of data in a separate capacitor within an integrated circuit. It must be periodically refreshed. It is denser but slower than SRAM. What is it?", difficulty: 'Medium' },
            { id: 'dld-ma-5', answer: "A memory hierarchy.", description: "A computer's memory was structured with multiple levels of varying speed, cost, and size, from fast CPU registers and caches to slower main memory and disk storage. What is this structure called?", difficulty: 'Medium' },
            { id: 'dld-ma-6', answer: "Cache memory.", description: "A small, fast memory located closer to the CPU that stores copies of the data from frequently used main memory locations to reduce the average time to access memory. What is this?", difficulty: 'Medium' },
            { id: 'dld-ma-7', answer: "The principle of locality.", description: "The tendency of a processor to access the same set of memory locations repetitively over a short period of time. This is why caching is effective. What is this principle?", difficulty: 'Hard' },
            { id: 'dld-ma-8', answer: "A bus.", description: "A communication system that transfers data between components inside a computer. It was comprised of address, data, and control lines. What is it called?", difficulty: 'Easy' },
            { id: 'dld-ma-9', answer: "The Arithmetic Logic Unit (ALU).", description: "The part of a CPU that carries out arithmetic and logic operations. What is it called?", difficulty: 'Easy' },
            { id: 'dld-ma-10', answer: "The Control Unit (CU).", description: "The component of a CPU that directs the operation of the processor, telling the computer's memory, ALU, and I/O devices how to respond to a program's instructions. What is it called?", difficulty: 'Medium' },
        ]
    }
];

const THERMODYNAMICS_TOPICS: Topic[] = [
    {
        id: 'td-topic-basics', name: 'Basic Concepts & Zeroth Law', description: 'Fundamental principles and definitions in thermodynamics.',
        challenges: [
            { id: 'td-b-1', answer: "The system is a closed system.", description: "A system can exchange energy (heat and work) but not matter with its surroundings. What type of system is this?", difficulty: 'Easy' },
            { id: 'td-b-2', answer: "The system is an open system.", description: "A system can exchange both matter and energy with its surroundings (e.g., a turbine). What type of system is this?", difficulty: 'Easy' },
            { id: 'td-b-3', answer: "The property is intensive.", description: "A property of a system, such as temperature or pressure, does not depend on the amount of substance. What kind of property is this?", difficulty: 'Easy' },
            { id: 'td-b-4', answer: "The property is extensive.", description: "A property of a system, such as mass or volume, is proportional to the amount of substance. What kind of property is this?", difficulty: 'Easy' },
            { id: 'td-b-5', answer: "The Zeroth Law of Thermodynamics.", description: "If two systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other. This law defines temperature. What is it?", difficulty: 'Medium' },
            { id: 'td-b-6', answer: "The process is isothermal.", description: "A process occurred during which the temperature of the system remained constant. What is this process called?", difficulty: 'Easy' },
            { id: 'td-b-7', answer: "The process is isobaric.", description: "A process occurred during which the pressure of the system remained constant. What is this process called?", difficulty: 'Easy' },
            { id: 'td-b-8', answer: "The process is isochoric (or isometric).", description: "A process occurred during which the volume of the system remained constant. What is this process called?", difficulty: 'Easy' },
            { id: 'td-b-9', answer: "The process is adiabatic.", description: "A process occurred during which there was no heat transfer between the system and its surroundings. What is this process called?", difficulty: 'Medium' },
            { id: 'td-b-10', answer: "The system is in thermodynamic equilibrium.", description: "A system was observed to be in thermal, mechanical, and chemical equilibrium, with no changes occurring. What is this overall state called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'td-topic-first-law', name: 'First Law of Thermodynamics', description: 'The conservation of energy.',
        challenges: [
            { id: 'td-fl-1', answer: "ΔU = Q - W", description: "This is the mathematical statement of the First Law of Thermodynamics for a closed system. Explain what each term (ΔU, Q, W) represents.", difficulty: 'Easy' },
            { id: 'td-fl-2', answer: "Energy cannot be created or destroyed.", description: "The First Law of Thermodynamics is a statement of the conservation of energy. What is the fundamental principle it expresses?", difficulty: 'Easy' },
            { id: 'td-fl-3', answer: "The change in internal energy (ΔU) is zero.", description: "For a cyclic process, where the system returns to its initial state, what can be said about the net change in its internal energy?", difficulty: 'Medium' },
            { id: 'td-fl-4', answer: "The work done is zero.", description: "A gas was heated in a rigid container (an isochoric process). According to the formula W = ∫P dV, what is the work done?", difficulty: 'Easy' },
            { id: 'td-fl-5', answer: "Enthalpy (H = U + PV).", description: "A thermodynamic property was defined as the sum of the internal energy and the product of pressure and volume. It is particularly useful for analyzing constant-pressure processes. What is this property?", difficulty: 'Medium' },
            { id: 'td-fl-6', answer: "A perpetual motion machine of the first kind is impossible.", description: "A machine was proposed that would produce work without any energy input. The First Law proves this is impossible. What is such a machine called?", difficulty: 'Medium' },
            { id: 'td-fl-7', answer: "The heat added (Q) equals the work done (W).", description: "In an isothermal process for an ideal gas, the internal energy does not change. According to the First Law, what is the relationship between heat and work?", difficulty: 'Hard' },
            { id: 'td-fl-8', answer: "The change in internal energy (ΔU) equals the negative of the work done (-W).", description: "In an adiabatic process, there is no heat transfer (Q=0). According to the First Law, what is the relationship between internal energy and work?", difficulty: 'Medium' },
            { id: 'td-fl-9', answer: "Specific heat capacity.", description: "The amount of heat required to raise the temperature of one unit mass of a substance by one degree was measured. What is this property called?", difficulty: 'Easy' },
            { id: 'td-fl-10', answer: "The turbine produces work.", description: "In a steady-flow process through a turbine, the enthalpy of the fluid decreases. According to the steady-flow energy equation, what does the turbine do?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'td-topic-second-law', name: 'Second Law of Thermodynamics', description: 'The direction of natural processes and the concept of entropy.',
        challenges: [
            { id: 'td-sl-1', answer: "The entropy of the universe increases.", description: "For any spontaneous process, what does the Second Law of Thermodynamics say about the total entropy of the universe?", difficulty: 'Medium' },
            { id: 'td-sl-2', answer: "The Kelvin-Planck statement.", description: "A statement of the Second Law says it is impossible to construct a device that operates in a cycle and produces no other effect than the transfer of heat from a single body in order to produce work. Which statement is this?", difficulty: 'Hard' },
            { id: 'td-sl-3', answer: "The Clausius statement.", description: "A statement of the Second Law says it is impossible to construct a device that operates in a cycle and produces no other effect than the transfer of heat from a cooler body to a hotter body. Which statement is this?", difficulty: 'Hard' },
            { id: 'td-sl-4', answer: "A heat engine.", description: "A device that converts thermal energy into mechanical work by operating in a cycle between a high-temperature source and a low-temperature sink. What is this device called?", difficulty: 'Easy' },
            { id: 'td-sl-5', answer: "A refrigerator or heat pump.", description: "A device that transfers heat from a low-temperature reservoir to a high-temperature reservoir with the input of work. What is this device called?", difficulty: 'Easy' },
            { id: 'td-sl-6', answer: "The Carnot cycle.", description: "A theoretical thermodynamic cycle was proposed that gives the maximum possible efficiency for a heat engine operating between two given temperatures. What is this cycle called?", difficulty: 'Medium' },
            { id: 'td-sl-7', answer: "The process is reversible.", description: "A process can be reversed without leaving any trace on the surroundings, and for which the net change in entropy of the universe is zero. What is this idealized process called?", difficulty: 'Medium' },
            { id: 'td-sl-8', answer: "A perpetual motion machine of the second kind is impossible.", description: "A machine was proposed that would spontaneously convert thermal energy from the ocean into work with 100% efficiency. The Second Law proves this is impossible. What is such a machine called?", difficulty: 'Medium' },
            { id: 'td-sl-9', answer: "Coefficient of Performance (COP).", description: "The efficiency of a refrigerator is measured not by thermal efficiency, but by the ratio of heat removed from the cold space to the work input. What is this metric called?", difficulty: 'Medium' },
            { id: 'td-sl-10', answer: "Entropy is a measure of disorder or randomness.", description: "A solid melted into a liquid, and the entropy of the substance increased. What is a qualitative definition of entropy?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'td-topic-substances', name: 'Properties of Pure Substances', description: 'Phases and properties of substances like water.',
        challenges: [
            { id: 'td-ps-1', answer: "A pure substance.", description: "A substance that has a fixed chemical composition throughout, like water or nitrogen. What is it called?", difficulty: 'Easy' },
            { id: 'td-ps-2', answer: "A saturated liquid-vapor mixture.", description: "A substance exists as part liquid and part vapor at the saturation temperature and pressure. What is this state called?", difficulty: 'Easy' },
            { id: 'td-ps-3', answer: "The quality (or dryness fraction).", description: "In a saturated mixture, the ratio of the mass of vapor to the total mass was calculated. What is this property called?", difficulty: 'Medium' },
            { id: 'td-ps-4', answer: "A compressed liquid (or subcooled liquid).", description: "Water at 20°C and 1 atm pressure was observed. Since its temperature is below the saturation temperature at that pressure (100°C), what state is it in?", difficulty: 'Medium' },
            { id: 'td-ps-5', answer: "A superheated vapor.", description: "Steam at 1 atm pressure and 150°C was observed. Since its temperature is above the saturation temperature at that pressure (100°C), what state is it in?", difficulty: 'Medium' },
            { id: 'td-ps-6', answer: "The critical point.", description: "A point on a phase diagram was identified where the saturated liquid and saturated vapor states are identical. What is this point?", difficulty: 'Hard' },
            { id: 'td-ps-7', answer: "The triple point.", description: "A point on a phase diagram was identified where the three phases (solid, liquid, and gas) of a substance coexist in equilibrium. What is this point?", difficulty: 'Hard' },
            { id: 'td-ps-8', answer: "Property tables (e.g., steam tables) were used.", description: "To find the specific enthalpy of water at a given temperature and pressure, a set of tabulated data was consulted. What are these tables called?", difficulty: 'Easy' },
            { id: 'td-ps-9', answer: "Latent heat of vaporization.", description: "The amount of energy needed to convert a unit mass of saturated liquid to saturated vapor at a given temperature and pressure was calculated. What is this energy called?", difficulty: 'Medium' },
            { id: 'td-ps-10', answer: "The ideal gas law (PV=mRT).", description: "An equation of state was used to model the behavior of a gas at low pressure and high temperature. What is this simple and well-known equation?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'td-topic-cycles', name: 'Thermodynamic Cycles', description: 'Sequences of processes used in engines and power plants.',
        challenges: [
            { id: 'td-c-1', answer: "The Rankine cycle.", description: "A model cycle used to predict the performance of steam turbine systems in power plants. It involves a pump, boiler, turbine, and condenser. What is this cycle?", difficulty: 'Medium' },
            { id: 'td-c-2', answer: "The Otto cycle.", description: "The ideal cycle for spark-ignition internal combustion engines (like gasoline engines). It consists of two isentropic and two isochoric processes. What is this cycle?", difficulty: 'Medium' },
            { id: 'td-c-3', answer: "The Diesel cycle.", description: "The ideal cycle for compression-ignition internal combustion engines. It differs from the Otto cycle by having a constant pressure heat addition process. What is this cycle?", difficulty: 'Medium' },
            { id: 'td-c-4', answer: "The Brayton cycle.", description: "The ideal cycle for gas-turbine engines (like jet engines). It consists of two isentropic and two isobaric processes. What is this cycle?", difficulty: 'Hard' },
            { id: 'td-c-5', answer: "The compression ratio.", description: "In an Otto cycle, the ratio of the maximum volume to the minimum volume in the cylinder was calculated. What is this important parameter?", difficulty: 'Easy' },
            { id: 'td-c-6', answer: "The boiler or steam generator.", description: "In a Rankine cycle, the component where water is converted into high-pressure steam by heat addition. What is it?", difficulty: 'Easy' },
            { id: 'td-c-7', answer: "The condenser.", description: "In a Rankine cycle, the component where steam is converted back into liquid water by rejecting heat to a cooling medium. What is it?", difficulty: 'Easy' },
            { id: 'td-c-8', answer: "Reheating was used.", description: "To improve the performance of a Rankine cycle, steam was expanded in a high-pressure turbine, then sent back to the boiler to be superheated again before entering a low-pressure turbine. What is this process called?", difficulty: 'Hard' },
            { id: 'td-c-9', answer: "Regeneration was used.", description: "To improve the efficiency of a Rankine cycle, some steam was extracted from the turbine to preheat the feedwater entering the boiler. What is this process called?", difficulty: 'Hard' },
            { id: 'td-c-10', answer: "The vapor-compression refrigeration cycle.", description: "The most widely used cycle for refrigerators and air conditioners. It involves a compressor, condenser, expansion valve, and evaporator. What is this cycle?", difficulty: 'Medium' },
        ]
    }
];

const FLUID_MECHANICS_TOPICS: Topic[] = [
    {
        id: 'fm-topic-properties', name: 'Fluid Properties', description: 'Fundamental characteristics of fluids.',
        challenges: [
            { id: 'fm-p-1', answer: "Viscosity.", description: "A fluid's internal resistance to flow was measured. A 'thick' fluid like honey has a high value of this property. What is it?", difficulty: 'Easy' },
            { id: 'fm-p-2', answer: "Density.", description: "The mass per unit volume of a fluid was calculated. What is this property?", difficulty: 'Easy' },
            { id: 'fm-p-3', answer: "Specific Gravity.", description: "The ratio of the density of a substance to the density of a reference substance (usually water) was calculated. What is this dimensionless property?", difficulty: 'Easy' },
            { id: 'fm-p-4', answer: "Surface Tension.", description: "A property of the surface of a liquid that allows it to resist an external force, causing phenomena like insects walking on water. What is it?", difficulty: 'Medium' },
            { id: 'fm-p-5', answer: "A Newtonian fluid.", description: "A fluid was observed where the shear stress is linearly proportional to the shear rate. Water and air are common examples. What type of fluid is this?", difficulty: 'Medium' },
            { id: 'fm-p-6', answer: "A non-Newtonian fluid.", description: "A fluid's viscosity changed when under stress (e.g., ketchup, cornstarch solution). What type of fluid is this?", difficulty: 'Medium' },
            { id: 'fm-p-7', answer: "Bulk Modulus.", description: "A measure of a fluid's resistance to compression. It's the reciprocal of compressibility. What is it?", difficulty: 'Hard' },
            { id: 'fm-p-8', answer: "Vapor Pressure.", description: "The pressure at which a liquid will boil at a given temperature. It's the cause of cavitation. What is this property?", difficulty: 'Medium' },
            { id: 'fm-p-9', answer: "Capillarity.", description: "The tendency of a liquid in a narrow tube to rise or fall as a result of surface tension. What is this phenomenon called?", difficulty: 'Medium' },
            { id: 'fm-p-10', answer: "The fluid is incompressible.", description: "An assumption was made that the fluid's density does not change with pressure. What is this assumption?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'fm-topic-statics', name: 'Fluid Statics', description: 'Fluids at rest.',
        challenges: [
            { id: 'fm-s-1', answer: "Pressure increases with depth.", description: "A diver went deeper into the ocean and experienced greater pressure. What is the fundamental principle of hydrostatics at play?", difficulty: 'Easy' },
            { id: 'fm-s-2', answer: "P = ρgh", description: "This formula was used to calculate the gauge pressure at a certain depth 'h' in a fluid of density 'ρ'. What is this formula?", difficulty: 'Easy' },
            { id: 'fm-s-3', answer: "Pascal's Law.", description: "A principle was applied in a hydraulic lift, stating that a pressure change at any point in a confined incompressible fluid is transmitted throughout the fluid such that the same change occurs everywhere. What is this law?", difficulty: 'Medium' },
            { id: 'fm-s-4', answer: "The buoyant force.", description: "An upward force was exerted by a fluid that opposes the weight of an immersed object. What is this force called?", difficulty: 'Easy' },
            { id: 'fm-s-5', answer: "Archimedes' Principle.", description: "The buoyant force on a submerged object is equal to the weight of the fluid that is displaced by the object. What principle is this?", difficulty: 'Medium' },
            { id: 'fm-s-6', answer: "A manometer was used.", description: "A U-shaped tube containing a liquid was used to measure the pressure difference between two points. What is this device called?", difficulty: 'Easy' },
            { id: 'fm-s-7', answer: "The object will float.", description: "An object was placed in water, and its average density was found to be less than the density of water. What will happen to the object?", difficulty: 'Easy' },
            { id: 'fm-s-8', answer: "The center of buoyancy.", description: "The point through which the buoyant force acts on a submerged body. It is the centroid of the displaced volume of fluid. What is this point called?", difficulty: 'Hard' },
            { id: 'fm-s-9', answer: "The metacenter.", description: "The stability of a floating body depends on the position of this point relative to the center of gravity. What is this point called?", difficulty: 'Hard' },
            { id: 'fm-s-10', answer: "The hydrostatic force on a submerged plane surface.", description: "The resultant force exerted by a fluid at rest on a surface was calculated. What is this force called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'fm-topic-dynamics', name: 'Fluid Dynamics', description: 'Fluids in motion.',
        challenges: [
            { id: 'fm-d-1', answer: "The continuity equation was applied.", description: "For an incompressible fluid flowing through a pipe that narrows, the velocity of the fluid was observed to increase. This is based on the conservation of mass (A1V1 = A2V2). What equation describes this?", difficulty: 'Easy' },
            { id: 'fm-d-2', answer: "Bernoulli's equation.", description: "An equation was used relating pressure, velocity, and elevation for a fluid in motion, based on the conservation of energy. It states that where the velocity is higher, the pressure is lower. What is this famous equation?", difficulty: 'Medium' },
            { id: 'fm-d-3', answer: "The flow is laminar.", description: "A fluid was observed flowing in smooth, parallel layers, with no disruption between the layers. This typically occurs at low velocities. What type of flow is this?", difficulty: 'Easy' },
            { id: 'fm-d-4', answer: "The flow is turbulent.", description: "A fluid was observed flowing in a chaotic manner with eddies and swirls. This typically occurs at high velocities. What type of flow is this?", difficulty: 'Easy' },
            { id: 'fm-d-5', answer: "The Reynolds number was calculated.", description: "A dimensionless number was calculated to predict the flow pattern (laminar or turbulent). It is the ratio of inertial forces to viscous forces. What is this number?", difficulty: 'Medium' },
            { id: 'fm-d-6', answer: "A streamline.", description: "A line was drawn in a flow field that is everywhere tangent to the velocity vector. What is this line called?", difficulty: 'Easy' },
            { id: 'fm-d-7', answer: "The no-slip condition.", description: "A fluid flowing over a solid surface was assumed to have zero velocity relative to the surface at the boundary. What is this fundamental condition called?", difficulty: 'Medium' },
            { id: 'fm-d-8', answer: "The boundary layer.", description: "A thin layer of fluid near a solid surface where viscous effects are important. What is this layer called?", difficulty: 'Medium' },
            { id: 'fm-d-9', answer: "Drag.", description: "The force exerted by a fluid on a body in the direction of flow. What is this resistive force called?", difficulty: 'Easy' },
            { id: 'fm-d-10', answer: "Lift.", description: "The force exerted by a fluid on a body in the direction perpendicular to the flow, responsible for flight. What is this force called?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'fm-topic-pipe', name: 'Flow in Pipes', description: 'Analysis of fluid flow through conduits.',
        challenges: [
            { id: 'fm-pp-1', answer: "Major losses occurred due to friction.", description: "As a fluid flowed through a long, straight pipe, there was a continuous loss of pressure. What is the primary cause of this loss?", difficulty: 'Easy' },
            { id: 'fm-pp-2', answer: "Minor losses occurred.", description: "Pressure loss was observed due to components like valves, bends, and elbows in a pipeline. What are these types of losses called?", difficulty: 'Easy' },
            { id: 'fm-pp-3', answer: "The Darcy-Weisbach equation was used.", description: "A primary equation was used to calculate the head loss due to friction in a pipe. It involves a friction factor (f). What is this equation?", difficulty: 'Medium' },
            { id: 'fm-pp-4', answer: "The Moody chart.", description: "A graph was used to find the Darcy friction factor (f) for turbulent flow. It plots the friction factor against the Reynolds number and relative roughness. What is this chart called?", difficulty: 'Hard' },
            { id: 'fm-pp-5', answer: "The hydraulic diameter.", description: "For flow in a non-circular duct (e.g., a square duct), a characteristic length was calculated to be used in the Reynolds number and Darcy-Weisbach equation. What is this called?", difficulty: 'Hard' },
            { id: 'fm-pp-6', answer: "The flow is fully developed.", description: "In a pipe, after an entrance region, the velocity profile was observed to be constant. What is the term for this flow regime?", difficulty: 'Medium' },
            { id: 'fm-pp-7', answer: "The velocity profile is parabolic.", description: "For fully developed laminar flow in a circular pipe, what is the shape of the velocity profile?", difficulty: 'Medium' },
            { id: 'fm-pp-8', answer: "Pipes are in series.", description: "Two pipes of different diameters were connected end-to-end, so the flow rate through them was the same. How are these pipes configured?", difficulty: 'Easy' },
            { id: 'fm-pp-9', answer: "Pipes are in parallel.", description: "A pipeline branched into two separate pipes which later rejoined. The total flow rate was the sum of the flow rates in the branches, and the head loss in each branch was the same. How are these pipes configured?", difficulty: 'Easy' },
            { id: 'fm-pp-10', answer: "Water hammer.", description: "A pressure surge was created when a fluid in motion was forced to stop or change direction suddenly (e.g., closing a valve quickly). What is this phenomenon called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'fm-topic-machines', name: 'Turbomachinery', description: 'Devices that transfer energy between a rotor and a fluid.',
        challenges: [
            { id: 'fm-m-1', answer: "A pump.", description: "A machine was used to add energy to a liquid to increase its pressure and move it through a pipe. What is this machine called?", difficulty: 'Easy' },
            { id: 'fm-m-2', answer: "A turbine.", description: "A machine was used to extract energy from a moving fluid (like water or steam) and convert it into useful work. What is this machine called?", difficulty: 'Easy' },
            { id: 'fm-m-3', answer: "A centrifugal pump.", description: "A pump used an impeller to rotate the fluid at high speed, using centrifugal force to increase its pressure. What type of pump is this?", difficulty: 'Medium' },
            { id: 'fm-m-4', answer: "An axial-flow pump.", description: "A pump where the fluid enters and leaves along the axis of rotation, similar to a propeller. What type of pump is this?", difficulty: 'Medium' },
            { id: 'fm-m-5', answer: "Net Positive Suction Head (NPSH).", description: "A parameter was calculated for a pump to determine if the pressure at the pump inlet is high enough to avoid cavitation. What is this parameter?", difficulty: 'Hard' },
            { id: 'fm-m-6', answer: "Cavitation occurred.", description: "In a pump, the local pressure dropped below the vapor pressure of the liquid, causing vapor bubbles to form and collapse, which damaged the pump. What is this phenomenon?", difficulty: 'Medium' },
            { id: 'fm-m-7', answer: "An impulse turbine (e.g., Pelton wheel).", description: "A type of turbine where the fluid strikes the blades at high velocity, and the pressure is constant across the blades. What is this classification of turbine?", difficulty: 'Hard' },
            { id: 'fm-m-8', answer: "A reaction turbine (e.g., Francis, Kaplan).", description: "A type of turbine that develops torque by reacting to the fluid's pressure and velocity changes as it passes through the rotor. What is this classification of turbine?", difficulty: 'Hard' },
            { id: 'fm-m-9', answer: "A pump performance curve.", description: "A graph was provided by a manufacturer showing a pump's head, efficiency, and power consumption as a function of its flow rate. What is this graph called?", difficulty: 'Medium' },
            { id: 'fm-m-10', answer: "The best efficiency point (BEP).", description: "A point on a pump's performance curve was identified where the pump operates at its highest efficiency. What is this operating point called?", difficulty: 'Medium' },
        ]
    }
];

const STRENGTH_OF_MATERIALS_TOPICS: Topic[] = [
    {
        id: 'som-topic-stress', name: 'Stress & Strain', description: 'Fundamental concepts of how materials respond to loads.',
        challenges: [
            { id: 'som-ss-1', answer: "Stress = Force / Area.", description: "The internal resistive force per unit area within a material was calculated. What is this quantity, and what is its formula?", difficulty: 'Easy' },
            { id: 'som-ss-2', answer: "Strain = Change in Length / Original Length.", description: "The deformation of a material per unit length was calculated. What is this dimensionless quantity, and what is its formula?", difficulty: 'Easy' },
            { id: 'som-ss-3', answer: "Hooke's Law was applied.", description: "A law stating that for a material in the elastic region, stress is directly proportional to strain. What is this law?", difficulty: 'Easy' },
            { id: 'som-ss-4', answer: "Young's Modulus (or Modulus of Elasticity).", description: "The constant of proportionality in Hooke's Law (Stress / Strain) was determined for a material. It measures the material's stiffness. What is this property called?", difficulty: 'Medium' },
            { id: 'som-ss-5', answer: "The elastic limit.", description: "A point on the stress-strain curve was identified, beyond which the material will no longer return to its original shape after the load is removed. What is this point?", difficulty: 'Medium' },
            { id: 'som-ss-6', answer: "The ultimate tensile strength.", description: "The maximum stress a material can withstand while being stretched or pulled before necking begins. What is this point on the stress-strain curve called?", difficulty: 'Medium' },
            { id: 'som-ss-7', answer: "Poisson's Ratio.", description: "When a material was stretched in one direction, it tended to get thinner in the other two directions. The ratio of this transverse strain to the axial strain was calculated. What is this ratio called?", difficulty: 'Hard' },
            { id: 'som-ss-8', answer: "Shear stress.", description: "Stress was induced by a force acting parallel to a surface, causing one part of the material to slide past another. What type of stress is this?", difficulty: 'Easy' },
            { id: 'som-ss-9', answer: "The factor of safety.", description: "The ratio of the ultimate stress of a material to the allowable (working) stress for a component was calculated to ensure a safe design. What is this ratio called?", difficulty: 'Medium' },
            { id: 'som-ss-10', answer: "Thermal stress.", description: "Stress was induced in a material because a change in temperature was prevented from causing a change in length. What is this type of stress called?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'som-topic-sfbmd', name: 'Shear Force & Bending Moment', description: 'Analyzing internal forces in beams.',
        challenges: [
            { id: 'som-sf-1', answer: "A simply supported beam.", description: "A beam was supported by a hinge at one end and a roller at the other. What is this common type of beam called?", difficulty: 'Easy' },
            { id: 'som-sf-2', answer: "A cantilever beam.", description: "A beam was fixed at one end and free at the other. What is this type of beam called?", difficulty: 'Easy' },
            { id: 'som-sf-3', answer: "Shear force.", description: "At a cross-section of a beam, the algebraic sum of the vertical forces acting to the left or right of the section was calculated. What is this internal force?", difficulty: 'Easy' },
            { id: 'som-sf-4', answer: "Bending moment.", description: "At a cross-section of a beam, the algebraic sum of the moments of all forces acting to the left or right of the section was calculated. What is this internal effect?", difficulty: 'Easy' },
            { id: 'som-sf-5', answer: "A Shear Force Diagram (SFD) was drawn.", description: "A diagram was created to show the variation of the shear force along the length of the beam. What is this diagram called?", difficulty: 'Medium' },
            { id: 'som-sf-6', answer: "A Bending Moment Diagram (BMD) was drawn.", description: "A diagram was created to show the variation of the bending moment along the length of the beam. What is this diagram called?", difficulty: 'Medium' },
            { id: 'som-sf-7', answer: "The point of zero shear.", description: "On the SFD, a point was identified where the shear force changes sign. This corresponds to the location of the maximum bending moment. What is this point?", difficulty: 'Medium' },
            { id: 'som-sf-8', answer: "The rate of change of shear force is equal to the intensity of the distributed load (dV/dx = -w).", description: "A relationship was established between the slope of the Shear Force Diagram and the loading on the beam. What is this relationship?", difficulty: 'Hard' },
            { id: 'som-sf-9', answer: "The rate of change of bending moment is equal to the shear force (dM/dx = V).", description: "A relationship was established between the slope of the Bending Moment Diagram and the value on the Shear Force Diagram. What is this relationship?", difficulty: 'Hard' },
            { id: 'som-sf-10', answer: "A point of contraflexure.", description: "A point on the Bending Moment Diagram was identified where the bending moment is zero, indicating a change from sagging to hogging. What is this point called?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'som-topic-bending', name: 'Bending & Shear Stresses in Beams', description: 'Calculating stresses caused by bending moments and shear forces.',
        challenges: [
            { id: 'som-b-1', answer: "The neutral axis.", description: "In a beam's cross-section, an axis was identified where the bending stress is zero. What is this axis called?", difficulty: 'Easy' },
            { id: 'som-b-2', answer: "The flexure formula (σ = My/I).", description: "An equation was used to calculate the bending stress (σ) at a distance 'y' from the neutral axis in a beam with bending moment 'M' and moment of inertia 'I'. What is this formula?", difficulty: 'Medium' },
            { id: 'som-b-3', answer: "Moment of Inertia (I).", description: "A geometric property of a beam's cross-section that indicates its resistance to bending was calculated. What is this property?", difficulty: 'Medium' },
            { id: 'som-b-4', answer: "Bending stress is maximum at the outermost fibers.", description: "In a bent beam, the stress was found to be highest at the top and bottom surfaces, furthest from the neutral axis. Where does maximum bending stress occur?", difficulty: 'Easy' },
            { id: 'som-b-5', answer: "One side is in tension, the other is in compression.", description: "For a simply supported beam bending downwards, what is the state of stress above and below the neutral axis?", difficulty: 'Medium' },
            { id: 'som-b-6', answer: "The shear formula (τ = VQ/Ib).", description: "An equation was used to calculate the shear stress (τ) at a point in a beam's cross-section. It involves the shear force (V) and the first moment of area (Q). What is this formula?", difficulty: 'Hard' },
            { id: 'som-b-7', answer: "Shear stress is maximum at the neutral axis.", description: "For a rectangular beam cross-section, the shear stress distribution was analyzed. Where was the shear stress found to be the highest?", difficulty: 'Medium' },
            { id: 'som-b-8', answer: "Shear stress is zero at the top and bottom fibers.", description: "For a beam's cross-section, where was the shear stress found to be zero?", difficulty: 'Medium' },
            { id: 'som-b-9', answer: "An I-beam.", description: "A beam with a cross-sectional shape like the letter 'I' was chosen because it is very efficient at resisting bending stress, as most of the material is located at the outer fibers. What is this common structural shape called?", difficulty: 'Easy' },
            { id: 'som-b-10', answer: "The section modulus (S = I/y_max).", description: "A geometric property was calculated that represents the efficiency of a cross-section in resisting bending. The maximum bending stress is M/S. What is this property?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'som-topic-torsion', name: 'Torsion & Columns', description: 'Twisting of shafts and buckling of columns.',
        challenges: [
            { id: 'som-t-1', answer: "Torsion.", description: "A structural member (a shaft) was subjected to a twisting moment or torque. What is this type of loading called?", difficulty: 'Easy' },
            { id: 'som-t-2', answer: "The torsion formula (τ = Tr/J).", description: "An equation was used to calculate the shear stress (τ) at a radius 'r' in a circular shaft subjected to torque 'T'. It involves the polar moment of inertia 'J'. What is this formula?", difficulty: 'Medium' },
            { id: 'som-t-3', answer: "The polar moment of inertia (J).", description: "A geometric property of a shaft's cross-section that indicates its resistance to twisting was calculated. What is this property?", difficulty: 'Medium' },
            { id: 'som-t-4', answer: "Shear stress is maximum at the outer surface.", description: "In a twisted circular shaft, the shear stress was analyzed. Where was the shear stress found to be the highest?", difficulty: 'Easy' },
            { id: 'som-t-5', answer: "The angle of twist (θ = TL/JG).", description: "The total angle that one end of a shaft rotates with respect to the other end was calculated. The formula involves the shaft's length (L) and shear modulus (G). What is this angle called?", difficulty: 'Medium' },
            { id: 'som-t-6', answer: "A column.", description: "A long, slender structural member subjected to a compressive axial load. What is this member called?", difficulty: 'Easy' },
            { id: 'som-t-7', answer: "Buckling occurred.", description: "When the compressive load on a slender column reached a critical value, the column suddenly bent or bowed out sideways. What is this failure mode called?", difficulty: 'Medium' },
            { id: 'som-t-8', answer: "Euler's critical load formula.", description: "An equation was used to calculate the maximum axial load that a long, slender, ideal column can carry without buckling. It depends on the column's length, stiffness, and end conditions. What is this famous formula?", difficulty: 'Hard' },
            { id: 'som-t-9', answer: "The slenderness ratio.", description: "A ratio was calculated that determines whether a column is 'long' and will fail by buckling, or 'short' and will fail by crushing. It relates the column's length to its cross-sectional properties. What is this ratio?", difficulty: 'Hard' },
            { id: 'som-t-10', answer: "The end conditions were fixed-free.", description: "In Euler's formula, an effective length factor of 2 was used. What does this imply about how the column was supported at its ends?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'som-topic-transform', name: 'Stress Transformation & Failure Theories', description: 'Analyzing stress on different planes and predicting failure.',
        challenges: [
            { id: 'som-tr-1', answer: "Principal stresses.", description: "On a stressed element, planes were found where the shear stress is zero. The normal stresses on these planes are the maximum and minimum normal stresses. What are these stresses called?", difficulty: 'Hard' },
            { id: 'som-tr-2', answer: "Maximum shear stress.", description: "The maximum value of shear stress was found to occur on planes at 45 degrees to the principal planes. What is this stress called?", difficulty: 'Medium' },
            { id: 'som-tr-3', answer: "Mohr's Circle was used.", description: "A graphical method was used to visualize the transformation of stresses from one plane to another and to find the principal stresses and maximum shear stress. What is this graphical tool?", difficulty: 'Hard' },
            { id: 'som-tr-4', answer: "Plane stress.", description: "An assumption was made that the stresses acting on one face of a cubic element are zero (e.g., on a thin plate). What is this state of stress called?", difficulty: 'Medium' },
            { id: 'som-tr-5', answer: "Plane strain.", description: "An assumption was made that the strain in one direction is zero (e.g., in a long body with uniform cross-section and loading). What is this state of strain called?", difficulty: 'Medium' },
            { id: 'som-tr-6', answer: "The material is brittle.", description: "A material failed suddenly under tension without significant plastic deformation (e.g., cast iron, glass). What is this type of material called?", difficulty: 'Easy' },
            { id: 'som-tr-7', answer: "The material is ductile.", description: "A material underwent large plastic deformation before fracturing (e.g., mild steel, aluminum). What is this type of material called?", difficulty: 'Easy' },
            { id: 'som-tr-8', answer: "The Maximum Normal Stress theory was used.", description: "A failure theory, suitable for brittle materials, predicted that failure occurs when the maximum principal stress reaches the ultimate strength of the material. What is this theory?", difficulty: 'Hard' },
            { id: 'som-tr-9', answer: "The Maximum Shear Stress (Tresca) theory was used.", description: "A failure theory, suitable for ductile materials, predicted that yielding begins when the maximum shear stress in a component becomes equal to the maximum shear stress at yielding in a tensile test. What is this theory?", difficulty: 'Hard' },
            { id: 'som-tr-10', answer: "The Distortion Energy (von Mises) theory was used.", description: "A failure theory, suitable for ductile materials, predicted that yielding occurs when the distortion energy in the actual loading equals the distortion energy at yielding in a tensile test. It is generally more accurate than the Tresca theory. What is this theory?", difficulty: 'Hard' },
        ]
    }
];

const STRUCTURAL_ANALYSIS_TOPICS: Topic[] = [
    {
        id: 'sa-topic-basics', name: 'Basics & Determinacy', description: 'Fundamental concepts of structural analysis.',
        challenges: [
            { id: 'sa-b-1', answer: "The structure is statically determinate.", description: "A structure's unknown reactions and internal forces could be determined using only the equations of static equilibrium (ΣFx=0, ΣFy=0, ΣM=0). What is this type of structure called?", difficulty: 'Easy' },
            { id: 'sa-b-2', answer: "The structure is statically indeterminate.", description: "The equations of static equilibrium were not sufficient to find all the unknown reactions and internal forces for a structure. What is this type of structure called?", difficulty: 'Easy' },
            { id: 'sa-b-3', answer: "The degree of indeterminacy is 1.", description: "For a beam, there were 4 unknown reactions, and only 3 equations of equilibrium available. What is its degree of static indeterminacy?", difficulty: 'Medium' },
            { id: 'sa-b-4', answer: "The structure is unstable.", description: "A structure had fewer reaction components than required for equilibrium, or the supports were arranged in a way that could not resist the applied loads. What is this condition called?", difficulty: 'Medium' },
            { id: 'sa-b-5', answer: "A truss.", description: "A structure composed of slender members joined together at their endpoints to form a series of triangles. What is this type of structure called?", difficulty: 'Easy' },
            { id: 'sa-b-6', answer: "A frame.", description: "A structure composed of members connected by rigid joints, which can resist moments. What is this type of structure called?", difficulty: 'Easy' },
            { id: 'sa-b-7', answer: "The members are two-force members.", description: "An assumption was made in truss analysis that members are only subjected to axial tension or compression. What is this type of member called?", difficulty: 'Medium' },
            { id: 'sa-b-8', answer: "A dead load.", description: "The self-weight of the structure itself was considered as a type of load. What is this called?", difficulty: 'Easy' },
            { id: 'sa-b-9', answer: "A live load.", description: "Loads that are movable or temporary, such as the weight of occupants, furniture, or vehicles, were considered. What are these loads called?", difficulty: 'Easy' },
            { id: 'sa-b-10', answer: "The principle of superposition.", description: "For a linearly elastic structure, the total displacement or internal loadings at a point can be found by adding the displacements or internal loadings caused by each of the component loads acting separately. What is this principle?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'sa-topic-truss', name: 'Analysis of Trusses', description: 'Finding forces in the members of a truss.',
        challenges: [
            { id: 'sa-t-1', answer: "The Method of Joints was used.", description: "An analysis method for trusses where the equilibrium of each joint is considered one at a time, using ΣFx=0 and ΣFy=0. What is this method?", difficulty: 'Easy' },
            { id: 'sa-t-2', answer: "The Method of Sections was used.", description: "An analysis method for trusses where the truss is cut by an imaginary section, and the equilibrium of one of the two parts is considered to find forces in a few specific members. What is this method?", difficulty: 'Medium' },
            { id: 'sa-t-3', answer: "A zero-force member.", description: "In a truss, a member was identified that carried no load under a given loading condition. What is this member called?", difficulty: 'Medium' },
            { id: 'sa-t-4', answer: "The force is in tension.", description: "The analysis of a truss member showed that it was being pulled apart at its ends. What is the state of force in this member?", difficulty: 'Easy' },
            { id: 'sa-t-5', answer: "The force is in compression.", description: "The analysis of a truss member showed that it was being pushed together at its ends. What is the state of force in this member?", difficulty: 'Easy' },
            { id: 'sa-t-6', answer: "The assumption of pin joints.", description: "When using the method of joints, it was assumed that all members are connected by frictionless pins. What is this key assumption?", difficulty: 'Easy' },
            { id: 'sa-t-7', answer: "The section cut through three members.", description: "When using the method of sections, an imaginary cut was made. To solve for the unknown forces using only the three equilibrium equations, what is the maximum number of members the cut should pass through?", difficulty: 'Medium' },
            { id: 'sa-t-8', answer: "A space truss.", description: "A truss structure was analyzed in three dimensions. What is this type of truss called?", difficulty: 'Medium' },
            { id: 'sa-t-9', answer: "A complex truss.", description: "A truss could not be classified as simple because it was not formed by starting with a basic triangle and adding two members and a joint. It could not be solved by joints or sections alone. What is this type of truss?", difficulty: 'Hard' },
            { id: 'sa-t-10', answer: "The reaction forces were found first.", description: "Before starting the method of joints or sections, the external support reactions of the entire truss were calculated by considering its overall equilibrium. What was the first step of the analysis?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'sa-topic-deflection', name: 'Deflection of Beams & Frames', description: 'Calculating the displacement and slope of structures.',
        challenges: [
            { id: 'sa-d-1', answer: "The double integration method was used.", description: "A method was used to find the deflection of a beam by integrating the moment-curvature equation (M = EI * d²y/dx²) twice. What is this method?", difficulty: 'Medium' },
            { id: 'sa-d-2', answer: "Macaulay's method (or the singularity function method).", description: "A method was used to find the deflection of a beam with multiple point loads or discontinuous loads by writing a single moment equation that is valid for the entire beam. What is this method?", difficulty: 'Hard' },
            { id: 'sa-d-3', answer: "The Moment-Area method was used.", description: "A semi-graphical method was used to find the slope and deflection of a beam, based on two theorems relating the M/EI diagram to the slope and deflection. What is this method?", difficulty: 'Hard' },
            { id: 'sa-d-4', answer: "The Conjugate Beam method was used.", description: "An imaginary beam was created, loaded with the M/EI diagram of the real beam. The shear and moment in this imaginary beam corresponded to the slope and deflection of the real beam. What is this method?", difficulty: 'Hard' },
            { id: 'sa-d-5', answer: "The principle of virtual work was used.", description: "A method was used to find the deflection at a point by applying a unit virtual load at that point and equating external virtual work to internal virtual work. What is this powerful energy method?", difficulty: 'Hard' },
            { id: 'sa-d-6', answer: "The slope is zero.", description: "For a cantilever beam, what is the boundary condition for the slope at the fixed support?", difficulty: 'Easy' },
            { id: 'sa-d-7', answer: "The deflection is zero.", description: "For a simply supported beam, what is the boundary condition for deflection at the supports?", difficulty: 'Easy' },
            { id: 'sa-d-8', answer: "Flexural rigidity (EI).", description: "A property of a beam that combines its material stiffness (E) and cross-sectional shape (I) was used in deflection calculations. What is this combined property called?", difficulty: 'Medium' },
            { id: 'sa-d-9', answer: "The elastic curve.", description: "The deflected shape of the longitudinal axis of a beam under load was drawn. What is this curve called?", difficulty: 'Easy' },
            { id: 'sa-d-10', answer: "Castigliano's theorem was used.", description: "An energy method was used where the partial derivative of the total strain energy in a structure with respect to an applied force gives the displacement in the direction of that force. What is this theorem?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'sa-topic-indeterminate', name: 'Analysis of Indeterminate Structures', description: 'Methods for solving structures where equilibrium equations are not enough.',
        challenges: [
            { id: 'sa-i-1', answer: "A compatibility equation was used.", description: "In addition to equilibrium equations, an extra equation based on the geometry of the structure's deformation was needed to solve an indeterminate structure. What is this type of equation called?", difficulty: 'Medium' },
            { id: 'sa-i-2', answer: "The Force Method (or method of consistent deformations).", description: "An indeterminate structure was solved by choosing a redundant force, removing the corresponding restraint, and calculating the deflection. The redundant force was then calculated to enforce the original boundary condition. What is this method?", difficulty: 'Hard' },
            { id: 'sa-i-3', answer: "The Slope-Deflection method.", description: "A displacement method was used where the moments at the ends of members are expressed in terms of the rotations and displacements of the joints. A set of equilibrium equations is then solved for the unknown displacements. What is this method?", difficulty: 'Hard' },
            { id: 'sa-i-4', answer: "The Moment Distribution method.", description: "An iterative displacement method developed by Hardy Cross was used to analyze indeterminate beams and frames. It involves distributing moments at joints until the system is balanced. What is this method?", difficulty: 'Hard' },
            { id: 'sa-i-5', answer: "The stiffness of the member.", description: "In displacement methods, a property representing the moment required to cause a unit rotation at one end of a member was calculated. What is this property?", difficulty: 'Medium' },
            { id: 'sa-i-6', answer: "Fixed-end moments.", description: "In the slope-deflection and moment distribution methods, the initial moments at the ends of a member, assuming the joints are locked, were calculated. What are these moments called?", difficulty: 'Medium' },
            { id: 'sa-i-7', answer: "The distribution factor.", description: "In the moment distribution method, a factor was calculated to determine what proportion of the unbalanced moment at a joint is distributed to each member connected to it. What is this factor?", difficulty: 'Hard' },
            { id: 'sa-i-8', answer: "The carry-over factor.", description: "In the moment distribution method, when a moment is applied to one end of a member, a certain fraction of that moment is 'carried over' to the other (fixed) end. What is this factor (typically 0.5)?", difficulty: 'Hard' },
            { id: 'sa-i-9', answer: "Sway was considered.", description: "In the analysis of an unsymmetrical frame or a symmetrically loaded frame, the lateral movement of the joints was taken into account. What is this lateral movement called?", difficulty: 'Medium' },
            { id: 'sa-i-10', answer: "A propped cantilever beam.", description: "A common example of a statically indeterminate structure (to the 1st degree) is a beam that is fixed at one end and supported by a roller at the other. What is this called?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'sa-topic-influence', name: 'Influence Lines', description: 'Analyzing the effect of moving loads on structures.',
        challenges: [
            { id: 'sa-i-1', answer: "An influence line.", description: "A diagram was drawn to show the variation of a function (like reaction, shear, or moment) at a specific point in a structure as a unit load moves across the structure. What is this diagram called?", difficulty: 'Medium' },
            { id: 'sa-i-2', answer: "A moving load.", description: "The analysis considered a load that changes its position on the structure, such as a truck moving across a bridge. What is this type of load called?", difficulty: 'Easy' },
            { id: 'sa-i-3', answer: "The influence line is for the reaction at support A.", description: "An influence line diagram was drawn where the ordinate at any point represents the value of the vertical reaction at support A when a unit load is placed at that point. What does this ILD represent?", difficulty: 'Easy' },
            { id: 'sa-i-4', answer: "The influence line is for shear at point C.", description: "An ILD was drawn where the ordinate represents the shear force at a specific cross-section C as a unit load moves across the beam. What does this ILD represent?", difficulty: 'Medium' },
            { id: 'sa-i-5', answer: "The influence line is for moment at point C.", description: "An ILD was drawn where the ordinate represents the bending moment at a specific cross-section C as a unit load moves across the beam. What does this ILD represent?", difficulty: 'Medium' },
            { id: 'sa-i-6', answer: "The shape of the influence line is triangular.", description: "The influence line for the reaction at a simple support of a beam was drawn. What is its general shape?", difficulty: 'Easy' },
            { id: 'sa-i-7', answer: "The maximum value is found by placing the load at the peak of the ILD.", description: "To find the maximum possible reaction at a support due to a single moving point load, where should the load be placed relative to the influence line for that reaction?", difficulty: 'Medium' },
            { id: 'sa-i-8', answer: "The value is the load magnitude multiplied by the area under the ILD.", description: "To find the effect of a uniformly distributed load on a function (e.g., reaction), how is the influence line used?", difficulty: 'Hard' },
            { id: 'sa-i-9', answer: "Müller-Breslau's Principle was used.", description: "A principle was used which states that the influence line for a function is, to some scale, the deflected shape of the beam when the beam is acted upon by that function. This provides a qualitative way to draw ILDs. What is this principle?", difficulty: 'Hard' },
            { id: 'sa-i-10', answer: "The absolute maximum bending moment in the bridge.", description: "Influence lines for a series of moving loads (like a truck) were used to determine the most critical loading position and the resulting maximum effect on a bridge girder. What is a common design parameter found this way?", difficulty: 'Hard' },
        ]
    }
];

const SURVEYING_TOPICS: Topic[] = [
    {
        id: 'sur-topic-basics', name: 'Fundamentals of Surveying', description: 'Core principles and classifications.',
        challenges: [
            { id: 'sur-b-1', answer: "To determine the relative positions of points on, above, or beneath the surface of the earth.", description: "The primary objective of surveying was stated. What is it?", difficulty: 'Easy' },
            { id: 'sur-b-2', answer: "Plane surveying.", description: "A type of surveying where the mean surface of the Earth is considered as a plane, and the curvature is neglected. It's used for small areas. What is it called?", difficulty: 'Easy' },
            { id: 'sur-b-3', answer: "Geodetic surveying.", description: "A type of surveying that takes into account the true shape of the Earth. It's used for large areas and high precision work. What is it called?", difficulty: 'Easy' },
            { id: 'sur-b-4', answer: "Working from whole to part.", description: "A fundamental principle of surveying where a system of control points is established first with high precision, and then details are located relative to these points. What is this principle?", difficulty: 'Medium' },
            { id: 'sur-b-5', answer: "A check was applied.", description: "To ensure the accuracy of measurements, an independent measurement or calculation was made. What is this essential surveying practice called?", difficulty: 'Easy' },
            { id: 'sur-b-6', answer: "A systematic error.", description: "An error occurred due to a flaw in the equipment or method, which was constant in sign and magnitude (e.g., a tape that is too short). What type of error is this?", difficulty: 'Medium' },
            { id: 'sur-b-7', answer: "A random error.", description: "Errors that remain after mistakes and systematic errors have been eliminated, caused by factors beyond the control of the surveyor. They are unpredictable. What type of error is this?", difficulty: 'Medium' },
            { id: 'sur-b-8', answer: "Accuracy.", description: "A term was used to indicate how close a measurement is to the true value. What is it?", difficulty: 'Easy' },
            { id: 'sur-b-9', answer: "Precision.", description: "A term was used to indicate how close a series of measurements are to each other, regardless of their relationship to the true value. What is it?", difficulty: 'Easy' },
            { id: 'sur-b-10', answer: "The scale of the map is 1:1000.", description: "On a map, 1 cm represented 10 meters on the ground. How is this scale expressed as a representative fraction?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'sur-topic-chain', name: 'Chain & Compass Surveying', description: 'Measuring distances and directions.',
        challenges: [
            { id: 'sur-c-1', answer: "Chain surveying.", description: "A method of surveying where only linear measurements are made in the field, and the area is divided into a network of triangles. What is it?", difficulty: 'Easy' },
            { id: 'sur-c-2', answer: "Ranging.", description: "The process of establishing intermediate points on a straight line between two endpoints. What is this called?", difficulty: 'Easy' },
            { id: 'sur-c-3', answer: "An offset.", description: "A lateral measurement was taken from a chain line to locate a point or object. What is this measurement called?", difficulty: 'Easy' },
            { id: 'sur-c-4', answer: "A check line.", description: "A line was measured in the field to check the accuracy of the framework of triangles in a chain survey. What is this line called?", difficulty: 'Medium' },
            { id: 'sur-c-5', answer: "Compass surveying.", description: "A type of surveying where the magnetic bearings of the survey lines are measured with a compass, and the lengths of the lines are measured with a chain or tape. What is it?", difficulty: 'Easy' },
            { id: 'sur-c-6', answer: "The magnetic bearing.", description: "The horizontal angle that a line makes with the magnetic north-south line was measured. What is this called?", difficulty: 'Easy' },
            { id: 'sur-c-7', answer: "Magnetic declination.", description: "The horizontal angle between the true meridian and the magnetic meridian at a place was identified. What is this angle called?", difficulty: 'Medium' },
            { id: 'sur-c-8', answer: "A whole circle bearing (WCB).", description: "A bearing was measured clockwise from the North, with a value ranging from 0° to 360°. What system of bearing is this?", difficulty: 'Easy' },
            { id: 'sur-c-9', answer: "Local attraction.", description: "A compass needle was found to be deflected from its normal position due to the presence of local magnetic fields from objects like power lines or ore deposits. What is this phenomenon called?", difficulty: 'Medium' },
            { id: 'sur-c-10', answer: "A closed traverse.", description: "A series of connected survey lines was run that forms a closed loop, starting and ending at the same point. What is this called?", difficulty: 'Easy' },
        ]
    },
    {
        id: 'sur-topic-leveling', name: 'Leveling', description: 'Determining the relative heights of points.',
        challenges: [
            { id: 'sur-l-1', answer: "Leveling.", description: "The art of determining the relative vertical distances (elevations) of different points on or near the surface of the earth. What is this branch of surveying called?", difficulty: 'Easy' },
            { id: 'sur-l-2', answer: "A benchmark.", description: "A relatively permanent point of known elevation was used as a reference for leveling. What is this point called?", difficulty: 'Easy' },
            { id: 'sur-l-3', answer: "A backsight (BS).", description: "The first staff reading taken after setting up the level instrument. It is a reading on a point of known elevation. What is it called?", difficulty: 'Easy' },
            { id: 'sur-l-4', answer: "A foresight (FS).", description: "The last staff reading taken before moving the level instrument. It determines the elevation of a new point. What is it called?", difficulty: 'Easy' },
            { id: 'sur-l-5', answer: "The Height of Instrument (HI) method was used.", description: "A method of calculating reduced levels where the elevation of the line of sight is found first (HI = RL of BM + BS), and then the RLs of other points are found by subtracting their staff readings from the HI. What is this method?", difficulty: 'Medium' },
            { id: 'sur-l-6', answer: "The Rise and Fall method was used.", description: "A method of calculating reduced levels where the difference in elevation between consecutive points is calculated directly. It provides a better check on the calculations. What is this method?", difficulty: 'Medium' },
            { id: 'sur-l-7', answer: "A turning point (or change point).", description: "A point on which both a foresight and a backsight are taken to shift the instrument position. What is this point called?", difficulty: 'Medium' },
            { id: 'sur-l-8', answer: "A closing error was found.", description: "In a leveling loop that started and ended on the same benchmark, the final calculated elevation was different from the starting elevation. What is this difference called?", difficulty: 'Easy' },
            { id: 'sur-l-9', answer: "The effect of curvature was corrected.", description: "A correction was applied because the level line is curved, but the line of sight is horizontal. This correction makes the staff reading smaller. What effect was corrected?", difficulty: 'Hard' },
            { id: 'sur-l-10', answer: "The effect of refraction was corrected.", description: "A correction was applied because light rays bend as they pass through layers of air of different densities. This correction makes the staff reading larger. What effect was corrected?", difficulty: 'Hard' },
        ]
    },
    {
        id: 'sur-topic-theodolite', name: 'Theodolite Traversing', description: 'Measuring horizontal and vertical angles with high precision.',
        challenges: [
            { id: 'sur-th-1', answer: "A theodolite.", description: "A precision instrument was used for measuring horizontal and vertical angles. What is it?", difficulty: 'Easy' },
            { id: 'sur-th-2', answer: "Centering.", description: "The process of setting up the theodolite exactly over a station mark. What is this operation called?", difficulty: 'Easy' },
            { id: 'sur-th-3', answer: "Leveling.", description: "The process of making the vertical axis of the theodolite truly vertical using the foot screws and plate levels. What is this operation called?", difficulty: 'Easy' },
            { id: 'sur-th-4', answer: "A traverse.", description: "A series of connected lines whose lengths and directions have been measured. What is this called?", difficulty: 'Easy' },
            { id: 'sur-th-5', answer: "Latitude.", description: "The projection of a survey line on the north-south meridian. It is calculated as L * cos(θ). What is this called?", difficulty: 'Medium' },
            { id: 'sur-th-6', answer: "Departure.", description: "The projection of a survey line on the east-west line. It is calculated as L * sin(θ). What is this called?", difficulty: 'Medium' },
            { id: 'sur-th-7', answer: "The sum of latitudes should be zero.", description: "For a closed traverse to be geometrically correct, what condition must the algebraic sum of the latitudes of all the lines satisfy?", difficulty: 'Medium' },
            { id: 'sur-th-8', answer: "The sum of departures should be zero.", description: "For a closed traverse to be geometrically correct, what condition must the algebraic sum of the departures of all the lines satisfy?", difficulty: 'Medium' },
            { id: 'sur-th-9', answer: "Bowditch's Rule (or Compass Rule).", description: "A rule was used to balance a traverse, where the error in latitude or departure of a line is proportional to the length of that line. What is this common rule?", difficulty: 'Hard' },
            { id: 'sur-th-10', answer: "Gale's Traverse Table.", description: "A systematic way of recording traverse measurements and performing calculations for latitudes, departures, and coordinates. What is the tabular format used for this?", difficulty: 'Medium' },
        ]
    },
    {
        id: 'sur-topic-contour', name: 'Contouring & Area/Volume', description: 'Representing topography and calculating quantities.',
        challenges: [
            { id: 'sur-co-1', answer: "A contour line.", description: "An imaginary line on the ground connecting points of equal elevation. What is this line called?", difficulty: 'Easy' },
            { id: 'sur-co-2', answer: "The contour interval.", description: "The constant vertical distance between two consecutive contour lines on a map. What is this called?", difficulty: 'Easy' },
            { id: 'sur-co-3', answer: "Contours of a hill.", description: "On a map, closed contour lines were shown with higher values inside. What feature does this represent?", difficulty: 'Easy' },
            { id: 'sur-co-4', answer: "Contours of a depression or pond.", description: "On a map, closed contour lines were shown with lower values inside. What feature does this represent?", difficulty: 'Easy' },
            { id: 'sur-co-5', answer: "Contours cross a ridge line at right angles.", description: "Contour lines with a U-shape were observed, with the convexity pointing towards lower ground. What topographic feature are they crossing?", difficulty: 'Medium' },
            { id: 'sur-co-6', answer: "Contours cross a valley line at right angles.", description: "Contour lines with a V-shape were observed, with the point of the V pointing towards higher ground. What topographic feature are they crossing?", difficulty: 'Medium' },
            { id: 'sur-co-7', answer: "Interpolation of contours.", description: "The process of spacing the contour lines proportionally between plotted ground points. What is this process called?", difficulty: 'Medium' },
            { id: 'sur-co-8', answer: "The trapezoidal rule was used.", description: "A method was used to calculate the area of an irregular plot of land by dividing it into a series of trapezoids. What is this rule?", difficulty: 'Medium' },
            { id: 'sur-co-9', answer: "Simpson's one-third rule was used.", description: "A method was used to calculate the area of an irregular plot of land, assuming the boundary between ordinates is a parabolic arc. It is generally more accurate than the trapezoidal rule. What is it?", difficulty: 'Hard' },
            { id: 'sur-co-10', answer: "A prismoidal formula was used.", description: "A formula was used to calculate the volume of earthwork (cut or fill) between two cross-sections. What is this type of formula?", difficulty: 'Hard' },
        ]
    }
];


export const SUBJECT_TOPICS: Record<Subject, Topic[]> = {
    'Engineering Mathematics': ENGINEERING_MATHEMATICS_TOPICS,
    'Engineering Physics': ENGINEERING_PHYSICS_TOPICS,
    'Engineering Chemistry': ENGINEERING_CHEMISTRY_TOPICS,
    'Programming for Problem Solving': PROGRAMMING_TOPICS,
    'Data Structures & Algorithms': DATA_STRUCTURES_TOPICS,
    'Operating Systems': OPERATING_SYSTEMS_TOPICS,
    'DBMS': DBMS_TOPICS,
    'Digital Logic Design': DIGITAL_LOGIC_DESIGN_TOPICS,
    'Thermodynamics': THERMODYNAMICS_TOPICS,
    'Fluid Mechanics': FLUID_MECHANICS_TOPICS,
    'Strength of Materials': STRENGTH_OF_MATERIALS_TOPICS,
    'Structural Analysis': STRUCTURAL_ANALYSIS_TOPICS,
    'Surveying': SURVEYING_TOPICS,
};

// A flattened version for Time Trials for simplicity
export const challengesBySubject: Record<Subject, Challenge[]> = ALL_SUBJECTS.reduce((acc, subject) => {
    acc[subject] = SUBJECT_TOPICS[subject].flatMap(topic => topic.challenges);
    return acc;
}, {} as Record<Subject, Challenge[]>);