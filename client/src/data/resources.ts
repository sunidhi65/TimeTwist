import { Subject, ResourceCategory } from '../types';

export const RESOURCES_DATA: Record<Subject, ResourceCategory[]> = {
    'Engineering Mathematics': [
        {
            name: "Core Mathematics Concepts",
            resources: [
                { title: "NPTEL: Engineering Mathematics I", description: "Comprehensive video lectures from the Indian Institutes of Technology.", url: "https://nptel.ac.in/courses/111105121", type: "video" },
                { title: "Paul's Online Math Notes", description: "In-depth notes and tutorials for calculus, algebra, and differential equations.", url: "https://tutorial.math.lamar.edu/", type: "article" },
                { title: "3Blue1Brown: Essence of Linear Algebra", description: "An intuitive, visual approach to understanding the core ideas of linear algebra.", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", type: "video" },
            ]
        },
        {
            name: "Sample Papers & PYQs",
            resources: [
                { title: "B.Tech 1st Year Mathematics Question Papers", description: "A collection of previous year question papers from various universities.", url: "#", type: "article" },
                { title: "GATE Mathematics Sample Questions", description: "Practice questions aligned with the GATE syllabus for deeper understanding.", url: "#", type: "article" },
            ]
        },
    ],
    'Programming for Problem Solving': [
        {
            name: "C Programming Fundamentals",
            resources: [
                { title: "GeeksforGeeks: C Programming Language", description: "A vast library of articles, tutorials, and practice problems for C.", url: "https://www.geeksforgeeks.org/c-programming-language/", type: "article" },
                { title: "NPTEL: Introduction to Programming in C", description: "A full course from IIT on the fundamentals of C programming.", url: "https://nptel.ac.in/courses/106104128", type: "video" },
            ]
        },
        {
            name: "Sample Papers & PYQs",
            resources: [
                { title: "Previous Year C Programming Question Papers", description: "Collection of final exam papers for PPS courses.", url: "#", type: "article" },
                { title: "Lab Exam Practice Problems", description: "A set of sample problems for practical lab examinations in C.", url: "#", type: "article" },
            ]
        },
    ],
    'Data Structures & Algorithms': [
        {
            name: "Core DSA Concepts",
            resources: [
                { title: "GeeksforGeeks: Data Structures", description: "The go-to resource for articles and implementations of all data structures.", url: "https://www.geeksforgeeks.org/data-structures/", type: "article" },
                { title: "VisuAlgo", description: "Visualize data structures and algorithms through animation.", url: "https://visualgo.net/en", type: "interactive" },
                { title: "Introduction to Algorithms (CLRS)", description: "The essential, comprehensive textbook for serious algorithm study.", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/", type: "book" },
            ]
        },
        {
            name: "Sample Papers & PYQs",
            resources: [
                { title: "DSA Mid-Term & Final Exam Papers", description: "Previous year question papers on DSA from top engineering colleges.", url: "#", type: "article" },
                { title: "Coding Interview Questions (DSA)", description: "A curated list of DSA questions frequently asked in technical interviews.", url: "#", type: "interactive" },
            ]
        },
    ],
    'Thermodynamics': [
        {
            name: "Mechanical Engineering: Thermodynamics",
            resources: [
                { title: "NPTEL: Basic Thermodynamics", description: "Course lectures from IIT Kharagpur covering fundamental concepts.", url: "https://nptel.ac.in/courses/112105220", type: "video" },
                { title: "LearnChemE", description: "Helpful screencasts and simulations, primarily for Chemical Engineering but with great core concepts.", url: "https://www.learncheme.com/screencasts/thermodynamics", type: "video" },
            ]
        },
        {
            name: "Sample Papers & PYQs",
            resources: [
                { title: "University Thermodynamics Exam Papers", description: "A collection of previous semester-end exam papers for Thermodynamics.", url: "#", type: "article" },
                { title: "GATE Mechanical: Thermodynamics PYQs", description: "Previous Year Questions from the GATE Mechanical Engineering paper.", url: "#", type: "article" },
            ]
        }
    ],
    'Engineering Physics': [],
    'Engineering Chemistry': [],
    'Operating Systems': [],
    'DBMS': [],
    'Digital Logic Design': [],
    'Fluid Mechanics': [],
    'Strength of Materials': [],
    'Structural Analysis': [],
    'Surveying': [],
};