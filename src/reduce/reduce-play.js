const API = [
    { cat: 'teams', faq: 'lorem ipsome 1', answer: 'this is answer 1', team: { name: 'team One 1' } },
    { cat: 'tools', faq: 'Tools faq 1', answer: 'this is tools answer 1', team: { name: 'Tools One 1'} },
    
    { cat: 'teams', faq: 'lorem ipsome 2', answer: 'this is answer 2', team: { name: 'team One 2'} },
    { cat: 'tools', faq: 'Tools faq 2', answer: 'this is tools answer 2', team: { name: 'Tools One 2'} }
]

// Expected Result 
// const result = [
//     { 
//         cat: 'teams',
//         faqs: [
//             { faq: 'lorem ipsome ', answer: 'This is answer 1' }
//         ]
//     }, {
//         cat: 'tools',
//         faq: [
//             { faq: 'lorem ipsum', answer: 'This is answer 2' }
//         ]
//     }
// ];

const result = API.reduce((array, current) => {
    // find if the accumalator contains the category 
    const index = array.findIndex(params => params.cat === current.cat);

    // array.push(current)
    if (index === -1) {
        const faqs = [];
        faqs.push({...current})
        array.push( {
            cat: current.cat,
            faqs
        })
    } else {
        array[index].faqs.push({...current})
    }
    return array
}, []);

console.log(JSON.stringify( result, null, 2));
