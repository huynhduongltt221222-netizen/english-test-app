const questionBank = [
    // =============================================================
    // PART 1: LISTENING (8 câu - Thường chia 2 bài)
    // =============================================================
    { 
        unit: 1, type: 'listening', 
        audioLink: 'https://link-audio-u1.mp3', 
        instruction: 'Listen to a talk about leisure activities. Circle T (True) or F (False).',
        questions: [
            { q: 'The speaker enjoys doing DIY projects with her mom.', a: 'T' },
            { q: 'She thinks cloud watching is a boring activity.', a: 'F' },
            { q: 'She usually spends 2 hours a day on social media.', a: 'F' },
            { q: 'Leisure activities help her reduce stress.', a: 'T' }
        ] 
    },
    { 
        unit: 2, type: 'listening', 
        audioLink: 'https://link-audio-u2.mp3', 
        instruction: 'Listen and fill in the blanks with ONE word.',
        questions: [
            { q: 'Life in the countryside is ________ and peaceful.', a: 'quiet' },
            { q: 'Farmers are busy ________ the rice in August.', a: 'harvesting' },
            { q: 'The nomadic life is ________ and adventurous.', a: 'hard' },
            { q: 'Children in the village play more ________ than city kids.', a: 'freely' }
        ] 
    },

    // =============================================================
    // PART 2: MULTIPLE CHOICE (20 câu - Trải dài 12 Unit)
    // =============================================================
    { unit: 1, type: 'mcq', text: 'I adore _______ with my friends in the park.', options: ['hanging out', 'to hang out', 'hang out', 'hung out'], answer: 'A' },
    { unit: 1, type: 'mcq', text: 'Which word has a different sound?', options: ['cook', 'food', 'book', 'foot'], answer: 'B' },
    { unit: 2, type: 'mcq', text: 'A tractor can plow _______ than a buffalo.', options: ['faster', 'fastly', 'more fast', 'fast'], answer: 'A' },
    { unit: 2, type: 'mcq', text: 'Nomads move to find _______ for their cattle.', options: ['pasture', 'field', 'water', 'forest'], answer: 'A' },
    { unit: 3, type: 'mcq', text: 'He studied hard; _______, he failed the exam.', options: ['however', 'therefore', 'otherwise', 'so'], answer: 'A' },
    { unit: 3, type: 'mcq', text: 'Peer _______ can lead to stress among teenagers.', options: ['pressure', 'press', 'pressing', 'pressed'], answer: 'A' },
    { unit: 4, type: 'mcq', text: 'The Tay is the second largest ethnic _______ in Viet Nam.', options: ['group', 'people', 'person', 'individual'], answer: 'A' },
    { unit: 5, type: 'mcq', text: 'You _______ sweep the floor on the first day of Tet.', options: ['shouldn\'t', 'should', 'must', 'can'], answer: 'A' },
    { unit: 6, type: 'mcq', text: 'Traditional festivals _______ every year in my village.', options: ['are held', 'hold', 'held', 'holding'], answer: 'A' },
    { unit: 7, type: 'mcq', text: 'If we _______ water, we will save the environment.', options: ['recycle', 'will recycle', 'recycles', 'recycled'], answer: 'A' },
    { unit: 8, type: 'mcq', text: 'The new shopping mall _______ at 9 a.m. tomorrow.', options: ['opens', 'is opening', 'will open', 'opened'], answer: 'A' },
    { unit: 9, type: 'mcq', text: 'A terrible _______ happened in Japan yesterday.', options: ['earthquake', 'flood', 'storm', 'tsunami'], answer: 'A' },
    { unit: 10, type: 'mcq', text: 'We will be _______ via holograms in the future.', options: ['communicating', 'communicate', 'communicated', 'communicates'], answer: 'A' },
    { unit: 11, type: 'mcq', text: 'The scientist said that AI _______ our lives.', options: ['would change', 'will change', 'change', 'changes'], answer: 'A' },
    { unit: 12, type: 'mcq', text: 'There _______ be life on other planets.', options: ['might', 'must', 'should', 'can'], answer: 'A' },
    { unit: 1, type: 'mcq', text: 'She is hooked _______ knitting.', options: ['on', 'in', 'at', 'with'], answer: 'A' },
    { unit: 2, type: 'mcq', text: 'Harvest time is the _______ time of the year.', options: ['busiest', 'busier', 'busy', 'more busy'], answer: 'A' },
    { unit: 4, type: 'mcq', text: '_______ ethnic group has the largest population?', options: ['Which', 'What', 'Who', 'Where'], answer: 'A' },
    { unit: 7, type: 'mcq', text: 'Air _______ causes breathing problems.', options: ['pollution', 'pollute', 'polluted', 'pollutant'], answer: 'A' },
    { unit: 10, type: 'mcq', text: 'Netiquette is a set of rules for _______ behavior.', options: ['online', 'offline', 'social', 'good'], answer: 'A' },

    // =============================================================
    // PART 3: READING (6 câu - Đọc & Trả lời)
    // =============================================================
    { 
        unit: 4, type: 'reading', 
        passage: 'Viet Nam is a multi-ethnic country with 54 groups. The Kinh make up the majority. Other groups like the Tay, Muong, and Hmong live mainly in mountainous areas. They have their own languages, customs, and traditional costumes, which enrich the national culture.',
        questions: [
            { q: 'How many ethnic groups are there in Viet Nam?', a: 'There are 54 groups.' },
            { q: 'Which group is the majority?', a: 'The Kinh group.' },
            { q: 'Where do most ethnic minorities live?', a: 'In mountainous areas.' },
            { q: 'Do they have the same language?', a: 'No, they have their own languages.' },
            { q: 'What enriches the national culture?', a: 'Their own customs and traditional costumes.' },
            { q: 'Is Viet Nam a multi-ethnic country?', a: 'Yes, it is.' }
        ]
    },

    // =============================================================
    // PART 4: WRITING (6 câu - Viết lại câu)
    // =============================================================
    { unit: 1, type: 'writing', text: 'I am fond of making origami. (Rewrite: I enjoy...)', answer: 'I enjoy making origami.' },
    { unit: 2, type: 'writing', text: 'The city is noisier than the country. (Rewrite: The country is...)', answer: 'The country is quieter than the city.' },
    { unit: 3, type: 'writing', text: 'He was tired, so he went to bed early. (Rewrite using "Therefore")', answer: 'He was tired; therefore, he went to bed early.' },
    { unit: 7, type: 'writing', text: 'We don\'t recycle, so we pollute the air. (Rewrite using "If")', answer: 'If we recycle, we won\'t pollute the air.' },
    { unit: 11, type: 'writing', text: '"I will buy a robot," said Nam. (Reported Speech)', answer: 'Nam said he would buy a robot.' },
    { unit: 12, type: 'writing', text: 'Maybe there is life on Mars. (Use: might)', answer: 'There might be life on Mars.' }
];