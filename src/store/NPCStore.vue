<script setup>
import { ref, provide } from "vue";

// Hero images
import img1 from "../assets/heroes/1.png";
import img2 from "../assets/heroes/2.png";

const heroes = ref([
  {
    id: "1",
    name: "amara",
    imgUrl: img1,
    hp: 100,
    atk: "10 - 17",
    sAtk: "21-23",
    title: `Shadow's Embrace: The Chronicles of Amara`,
    descriptionOne: `In a realm of ancient legends and fierce battles, there exists a female black Maine Coon warrior named Amara. Renowned for her extraordinary prowess and striking appearance, she possesses a unique power that sets her apart from her fellow warriors - the ability to manipulate shadows.`,
    descriptionTwo: `Amara's sleek black fur glistens in the moonlight, adorned with subtle patterns resembling wisps of shadow. Her piercing amber eyes reflect a deep understanding of the darkness that surrounds her. Born into a lineage of formidable warriors, she has inherited a profound connection to the shadows that dance at her command.`,
    descriptionThree: `When Amara engages in combat, she harnesses her shadow ability to astonishing effect. The shadows obediently respond to her will, extending and morphing at her whim. With a mere flick of her paw, she can conjure tendrils of darkness, coiling around her enemies, ensnaring them within an inky prison. In the midst of battle, her movements become fluid and ethereal, seamlessly blending with the shadows that embrace her.`,
    descriptionFour: `However, Amara's power comes at a cost. The shadows she manipulates hold an ancient darkness that hungers for her soul. To wield her ability without succumbing to its malevolence, she must maintain an unwavering will and keep her inner light burning brightly. It is a delicate balance, requiring both strength of heart and clarity of purpose.`,
    descriptionFive: `As a respected warrior among her kin, Amara uses her unique gift to protect her clan from the forces of darkness that threaten their land. With each passing moonrise, she stands as a beacon of hope, combining her physical prowess with the mystical power of shadows to ensure the survival of her people.`,
    descriptionSix: `In the realm where valor and magic intertwine, Amara, the female black Maine Coon warrior, leaves an indelible mark with her shadow abilities, forever etching her name into the annals of legend.`,
  },
  {
    id: "2",
    name: "elara ",
    imgUrl: img2,
    hp: 80,
    atk: "15 - 17",
    sAtk: "20-24",
    title: `Frostweaver's Legacy`,
    descriptionOne: `In a realm where magic flows through the veins of those chosen by fate, a young woman named Elara embarks on a journey of self-discovery. Elara, a powerful sorceress of the maincoon race, possesses a unique ability—she commands the very essence of frost.`,
    descriptionTwo: `Born into a lineage of renowned sorcerers, Elara is the first of her family to inherit the rare white fur that signifies great magical potential. As she grows, her abilities become evident, surpassing even the most experienced sorcerers in her clan. But it is her control over ice and frost that truly sets her apart.`,
    descriptionThree: `Tasked with preserving the delicate balance between the forces of light and darkness, Elara must harness her frost abilities to protect her homeland from impending peril. The land is threatened by an ancient evil that seeks to engulf the realm in eternal winter. With her powers growing stronger, she ventures into uncharted territories, exploring forgotten ruins and seeking ancient artifacts to aid her in the battle against the encroaching darkness.`,
    descriptionFour: `As Elara's journey unfolds, she discovers hidden truths about her ancestry and the nature of her powers. Along the way, she encounters a diverse cast of characters who join her cause—each with their unique talents and backgrounds. Together, they form an unlikely alliance, combining their strengths to face the ultimate challenge that lies ahead.`,
    descriptionFive: `But as Elara delves deeper into her frost abilities, she must confront the dangers of wielding such potent magic. The frost within her threatens to consume her, testing her resolve and forcing her to find a delicate balance between wielding her power and preserving her humanity.`,
    descriptionSix: `"Frostweaver's Legacy" is a tale of adventure, self-discovery, and the bonds of friendship, as Elara embraces her destiny as the chosen protector of her land. Can she master her frost abilities and stand against the encroaching darkness, or will the weight of her power prove too great? The fate of the realm hangs in the balance as Elara's journey unfolds.`,
  },
]);

provide("heroes", heroes);

// Demons images
import demomImg1 from "../assets/boss/imgsDemon/1.png";
import demomImg2 from "../assets/boss/imgsDemon/2.png";
import demomImg3 from "../assets/boss/imgsDemon/3.png";
import demomImg4 from "../assets/boss/imgsDemon/4.png";
import demomImg5 from "../assets/boss/imgsDemon/5.png";
import demomImg6 from "../assets/boss/imgsDemon/6.png";
import demomImg7 from "../assets/boss/imgsDemon/7.png";
import demomImg8 from "../assets/boss/imgsDemon/8.png";

const demons = ref([
  {
    id: "1",
    name: "Inferno",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: demomImg1,
  },
  {
    id: "2",
    name: "Abyssalith",
    hp: "170",
    atk: "10-13",
    sAtk: "15-21",
    def: "6-9",
    imagUrl: demomImg2,
  },
  {
    id: "3",
    name: "Vortexius",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: demomImg3,
  },
  {
    id: "4",
    name: "Hexmara",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: demomImg4,
  },
  {
    id: "5",
    name: "Malgorth",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: demomImg5,
  },
  {
    id: "6",
    name: "Pyroxis",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: demomImg6,
  },
  {
    id: "7",
    name: "Shadowcore",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: demomImg7,
  },
  {
    id: "8",
    name: "Dreadsteel",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: demomImg8,
  },
]);

provide("demons", demons);

// Angels images
import angelImg1 from "../assets/boss/imgsAngel/1.png";
import angelImg2 from "../assets/boss/imgsAngel/2.png";
import angelImg3 from "../assets/boss/imgsAngel/3.png";
import angelImg4 from "../assets/boss/imgsAngel/4.png";
import angelImg5 from "../assets/boss/imgsAngel/5.png";
import angelImg6 from "../assets/boss/imgsAngel/6.png";
import angelImg7 from "../assets/boss/imgsAngel/7.png";
import angelImg8 from "../assets/boss/imgsAngel/8.png";

const angels = ref([
  {
    id: "1",
    name: "Seraph",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: angelImg1,
  },
  {
    id: "2",
    name: "Celestia",
    hp: "170",
    atk: "10-13",
    sAtk: "15-21",
    def: "6-9",
    imagUrl: angelImg2,
  },
  {
    id: "3",
    name: "Archon",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: angelImg3,
  },
  {
    id: "4",
    name: "Lumina",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: angelImg4,
  },
  {
    id: "5",
    name: "Aegis",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: angelImg5,
  },
  {
    id: "6",
    name: "Solaris",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: angelImg6,
  },
  {
    id: "7",
    name: "Elysium",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: angelImg7,
  },
  {
    id: "8",
    name: "Astraeus",
    hp: "120",
    atk: "12-15",
    sAtk: "17-25",
    def: "4-6",
    imagUrl: angelImg8,
  },
]);

provide("angels", angels);
</script>

<template>
  <slot></slot>
</template>
