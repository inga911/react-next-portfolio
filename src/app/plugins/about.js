import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CgGym } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { MdPets } from "react-icons/md";

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
}

const birthday = "1995-10-10";
const age = calculateAge(birthday);


export const about = {
    title: "About",
    descriptionPartOne: "After enjoying the security and stability of my previous career, I recognized that my professional growth had reached a plateau.\n\nI yearned for challenges that would push my boundaries and open doors to new possibilities. ",
    descriptionPartTwo: "Two years ago, I took a bold step to reinvent myself and embarked on a dynamic journey into the world of information technology.\n\nWith a deep passion for innovation, I committed to becoming a full-stack developer. This decision was more than a career shift; it was a transformation.\n\nI immersed myself in rigorous retraining, enrolling in renowned programming schools and continuously expanding my skills through diverse online platforms. Every day, I am driven by the excitement of learning something new, solving complex problems, and building solutions that make an impact.",
    items: [
        {
            name: "Lithuanian",
            level: 'Native',
            backgroundImage:
                "https://play-lh.googleusercontent.com/kjQl38iJk3tsytXDPBNDuKmhW4A7ipQvlmun3w17NpWLSjbk4fB6xBKa1AUPgQxmjbyD",
        },
        {
            name: "English",
            level: 'B1 - B2',
            backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVY_aMmKCK1bFvxLGzBDQ5tVE_UzSpz0z6J6hAmhRNMJ8W1q1LJhO09SmStOSmF2YkS8&usqp=CAU'
        },
        {
            name: "Norwegian",
            level: 'B1',
            backgroundImage: 'https://s1.15min.lt/static/cache/eDEwODAsNzMweDU0NCw2MTY3MjAsb3JpZ2luYWwsLGlkPTk2NzYyNiZkYXRlPTIwMTMlMkYxMiUyRjA0LDE3MDYyODI4ODM=/norvegijos-veliava-529fa43f81585.jpg'
        },
    ],
    facts: [
        {
            item: `I  am ${age} years old`,
            icon: <LiaBirthdayCakeSolid />
        },

        {
            item: 'I lived in Norway for 5 years',
            icon: <GiWorld />
        },
        {
            item: 'I enjoy an active lifestyle',
            icon: <CgGym />
        },
        {
            item: 'I adore animals',
            icon: <MdPets />
        },
    ]
};
