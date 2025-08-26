

import { Subject, SamplePaper } from '../types';

export const SAMPLE_PAPERS_DATA: Record<string, Partial<Record<Subject, SamplePaper[]>>> = {
    'IIT Bombay': {
        'Engineering Mathematics': [
            { id: 'iitb-em-1', title: 'Mid-Term Exam 2023', year: 2023, url: '#' },
            { id: 'iitb-em-2', title: 'End-Term Exam 2023', year: 2023, url: '#' },
            { id: 'iitb-em-3', title: 'Mid-Term Exam 2022', year: 2022, url: '#' },
        ],
        'Programming for Problem Solving': [
            { id: 'iitb-pps-1', title: 'Lab Quiz 1 2023', year: 2023, url: '#' },
            { id: 'iitb-pps-2', title: 'End-Term Theory 2023', year: 2023, url: '#' },
        ],
        'Data Structures & Algorithms': [
            { id: 'iitb-dsa-1', title: 'Mid-Sem Paper 2023', year: 2023, url: '#' },
            { id: 'iitb-dsa-2', title: 'End-Sem Paper 2022', year: 2022, url: '#' },
        ],
    },
    'IIT Delhi': {
        'Engineering Mathematics': [
            { id: 'iitd-em-1', title: 'End Semester Paper 2022', year: 2022, url: '#' },
        ],
        'Programming for Problem Solving': [
            { id: 'iitd-pps-1', title: 'Mid-Semester Paper 2023', year: 2023, url: '#' },
            { id: 'iitd-pps-2', title: 'End-Term Paper 2023', year: 2023, url: '#' },
        ],
        'Data Structures & Algorithms': [
             { id: 'iitd-dsa-1', title: 'Mid-Term Paper 2023', year: 2023, url: '#' },
             { id: 'iitd-dsa-2', title: 'End-Term Paper 2023', year: 2023, url: '#' },
        ]
    },
    'BITS Pilani': {
         'Engineering Physics': [
            { id: 'bitsp-ep-1', title: 'Comprehensive Exam 2023', year: 2023, url: '#' },
         ],
         'Digital Logic Design': [
            { id: 'bitsp-dld-1', title: 'Mid-Semester Test 2022', year: 2022, url: '#' },
            { id: 'bitsp-dld-2', title: 'Comprehensive Exam 2022', year: 2022, url: '#' },
         ]
    },
    'IIIT Hyderabad': {
        'Data Structures & Algorithms': [
            { id: 'iiith-dsa-1', title: 'Assignment 3 Questions 2023', year: 2023, url: '#' },
        ],
        'Operating Systems': [
            { id: 'iiith-os-1', title: 'Mid-Term Exam 2022', year: 2022, url: '#' },
        ]
    }
};