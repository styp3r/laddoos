//Snacks
import vadaPav from '../images/Items/Snacks/vada pav.jpg';
import tikkiyaPav from '../images/Items/Snacks/tikkiya pav.jpg';
import samosaPav from '../images/Items/Snacks/samosa pav.jpg';
import cutletPav from '../images/Items/Snacks/cutlet pav.jpg';
import cheeseVadaPav from '../images/Items/Snacks/cheese vada pav.jpg';
import paniPuri from '../images/Items/Snacks/pani puri.jpg';
//Chaats
import alooBatata from '../images/Items/chaats/aloo batata.jpg';
import bhelPuri from '../images/Items/chaats/bhel puri.jpg';
import cutletChat from '../images/Items/chaats/cutlet chat.jpg';
import cutletMutter from '../images/Items/chaats/cutlet mutter.jpg';
import dahiBatata from '../images/Items/chaats/dahi batata.jpg';
import dahiKatoriChat from '../images/Items/chaats/dahi katori chat.jpg';
import dahiPapdi from '../images/Items/chaats/dahi papdi.jpg';
import dahiRajKachori from '../images/Items/chaats/dahi raj kachori.jpg';
import jhalMuri from '../images/Items/chaats/jhal muri.jpg';
import kachoriChaat from '../images/Items/chaats/kachori chaat.jpg';
import kachoriMutter from '../images/Items/chaats/kachori mutter.jpg';
import masalaPuri from '../images/Items/chaats/masala puri.jpg';
import papdiChole from '../images/Items/chaats/papdi chole.jpg';
import papdiMutter from '../images/Items/chaats/papdi mutter.jpg';
import plainMutter from '../images/Items/chaats/plain mutter.jpg';
import rasgullaChat from '../images/Items/chaats/rasgulla chat.jpg';
import samosaChat from '../images/Items/chaats/samosa chat.jpg';
import samosaMutter from '../images/Items/chaats/samosa mutter.jpg';
import sevPuri from '../images/Items/chaats/sev puri.jpg';
import tikiyaMutter from '../images/Items/chaats/tikiya mutter.jpg';
import tomatoChaat from '../images/Items/chaats/tomato chaat.jpg';
//Beverages
import badamMilk from '../images/Items/Beverages/badam milk.jpg';
import chaas from '../images/Items/Beverages/chaas.jpg';
import hotBadamMilk from '../images/Items/Beverages/hot badam milk.jpg';
import mangoLassi from '../images/Items/Beverages/mango lassi.jpg';
import saltLassi from '../images/Items/Beverages/salt lassi.jpg';
import sweetLassi from '../images/Items/Beverages/sweet lassi.jpg';
//Namkeen
import awalakki from '../images/Items/Namkeen/awalakki.jpg';
import bombayMix from '../images/Items/Namkeen/bombay mix.jpg';
import dalmot from '../images/Items/Namkeen/dalmot.jpg';
import gathiya from '../images/Items/Namkeen/gathiya.jpg';
import kadaBoondi from '../images/Items/Namkeen/kada boondi.jpg';
import lahsenSev from '../images/Items/Namkeen/lahsen sev.jpg';
import masalaChips from '../images/Items/Namkeen/masala chips.jpg';
import mathri from '../images/Items/Namkeen/mathri.jpg';
import nimkiPlain from '../images/Items/Namkeen/nimki plain.jpg';
import nimkiMasala from '../images/Items/Namkeen/nimki plain.jpg';
import palakSev from '../images/Items/Namkeen/palak sev.jpg';
import papdi from '../images/Items/Namkeen/papdi.jpg';
import plainSev from '../images/Items/Namkeen/plain sev.jpg';
import sakarpala from '../images/Items/Namkeen/sakarpala.jpg';
import saltChips from '../images/Items/Namkeen/salt chips.jpg';
import sohali from '../images/Items/Namkeen/sohali.jpg';
//import from '../images/Items/';


const ItemList = [
    {
        id: 0,
        name: "Vada Pav",
        category: "snacks",
        bestseller: true,
        qty: "1 Piece",
        price: 40,
        img: vadaPav
    },
    {
        id: 1,
        name: "Tikkiya Pav",
        category: "snacks",
        bestseller: false,
        qty: "1 Piece",
        price: 46,
        img: tikkiyaPav
    },
    {
        id: 2,
        name: "Samosa Pav",
        category: "snacks",
        bestseller: false,
        qty: "1 Piece",
        price: 46,
        img: samosaPav
    },
    {
        id: 3,
        name: "Cutlet Pav",
        category: "snacks",
        bestseller: false,
        qty: "1 Piece",
        price: 46,
        img: cutletPav
    },
    {
        id: 4,
        name: "Cheese Vada Pav",
        category: "snacks",
        bestseller: false,
        qty: "1 Piece",
        price: 50,
        img: cheeseVadaPav
    },
    {
        id: 5,
        name: "Pani Puri",
        category: "snacks",
        bestseller: false,
        qty: "6 Pieces",
        price: 45,
        img: paniPuri
    },
    {
        id: 6,
        name: "Aloo Batata Puri",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 60,
        img: alooBatata
    },
    {
        id: 7,
        name: "Bhel Puri",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 55,
        img: bhelPuri
    },
    {
        id: 8,
        name: "Cutlet Chaat",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 75,
        img: cutletChat
    },
    {
        id: 9,
        name: "Cutlet Mutter",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 75,
        img: cutletMutter
    },
    {
        id: 10,
        name: "Dahi Batata Puri",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 80,
        img: dahiBatata
    },
    {
        id: 11,
        name: "Dahi Katori Chaat",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 85,
        img: dahiKatoriChat
    },
    {
        id: 12,
        name: "Dahi Papdi Chaat",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 80,
        img: dahiPapdi
    },
    {
        id: 13,
        name: "Dahi Raj Kachori",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 85,
        img: dahiRajKachori
    },
    {
        id: 14,
        name: "Jhal Muri",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 60,
        img: jhalMuri
    },
    {
        id: 15,
        name: "Kachori Chaat",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 72,
        img: kachoriChaat
    },
    {
        id: 16,
        name: "Kachori Mutter",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 75,
        img: kachoriMutter
    },
    {
        id: 17,
        name: "Masala Puri",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 55,
        img: masalaPuri
    },
    {
        id: 18,
        name: "Papdi Chole",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 75,
        img: papdiChole
    },
    {
        id: 19,
        name: "Papdi Mutter",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 75,
        img: papdiMutter
    },
    {
        id: 20,
        name: "Plain Mutter",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 55,
        img: plainMutter
    },
    {
        id: 21,
        name: "Rasgulla Chaat",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 84,
        img: rasgullaChat
    },
    {
        id: 22,
        name: "Samosa Chaat",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 72,
        img: samosaChat
    },
    {
        id: 23,
        name: "Samosa Mutter",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 75,
        img: samosaMutter
    },
    {
        id: 24,
        name: "Sev Puri",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 68,
        img: sevPuri
    },
    {
        id: 25,
        name: "Tikkiya Mutter",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 75,
        img: tikiyaMutter
    },
    {
        id: 26,
        name: "Tomato Chaat",
        category: "chaats",
        bestseller: false,
        qty: "1 Plate",
        price: 60,
        img: tomatoChaat
    },
    {
        id: 27,
        name: "Cold Badam Milk",
        category: "beverages",
        bestseller: false,
        qty: "250ml",
        price: 65,
        img: badamMilk
    },
    {
        id: 28,
        name: "Chaas",
        category: "beverages",
        bestseller: false,
        qty: "250ml",
        price: 60,
        img: chaas
    },
    {
        id: 29,
        name: "Hot Badam Milk",
        category: "beverages",
        bestseller: false,
        qty: "250ml",
        price: 65,
        img: hotBadamMilk
    },
    {
        id: 30,
        name: "Mango Lassi",
        category: "beverages",
        bestseller: false,
        qty: "250ml",
        price: 73,
        img: mangoLassi
    },
    {
        id: 31,
        name: "Salt Lassi",
        category: "beverages",
        bestseller: false,
        qty: "250ml",
        price: 65,
        img: saltLassi
    },
    {
        id: 32,
        name: "Sweet Lassi",
        category: "beverages",
        bestseller: false,
        qty: "250ml",
        price: 65,
        img: sweetLassi
    },
    {
        id: 33,
        name: "Awalakki Mixture",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 66.96,
        img: awalakki
    },
    {
        id: 34,
        name: "Bombay Mixture",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 66.96,
        img: bombayMix
    },
    {
        id: 35,
        name: "Dalmot",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 66.96,
        img: dalmot
    },
    {
        id: 36,
        name: "Gathiya",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 71.43,
        img: gathiya
    },
    {
        id: 37,
        name: "Boondi Mixture",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 66.96,
        img: kadaBoondi
    },
    {
        id: 38,
        name: "Lahsen Sev",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 66.96,
        img: lahsenSev
    },
    {
        id: 39,
        name: "Spicy Potato Chips",
        category: "namkeen",
        bestseller: false,
        qty: "100gms",
        price: 49.10,
        img: masalaChips
    },
    {
        id: 40,
        name: "Salted Potato Chips",
        category: "namkeen",
        bestseller: false,
        qty: "100gms",
        price: 49.10,
        img: saltChips
    },
    {
        id: 41,
        name: "Mathri",
        category: "namkeen",
        bestseller: false,
        qty: "200gms",
        price: 71.43,
        img: mathri
    },
    {
        id: 42,
        name: "Nimki Plain",
        category: "namkeen",
        bestseller: false,
        qty: "200gms",
        price: 71.43,
        img: nimkiPlain
    },
    {
        id: 43,
        name: "Nimki Masala",
        category: "namkeen",
        bestseller: false,
        qty: "200gms",
        price: 71.43,
        img: nimkiMasala
    },
    {
        id: 44,
        name: "Palak Sev",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 66.96,
        img: palakSev
    },
    {
        id: 45,
        name: "Gujarati Papdi",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 71.43,
        img: papdi
    },
    {
        id: 46,
        name: "Plain Sev",
        category: "namkeen",
        bestseller: false,
        qty: "180gms",
        price: 66.96,
        img: plainSev
    },
    {
        id: 47,
        name: "Sakarpala",
        category: "namkeen",
        bestseller: false,
        qty: "200gms",
        price: 71.43,
        img: sakarpala
    },
    {
        id: 48,
        name: "Sohali",
        category: "namkeen",
        bestseller: false,
        qty: "200gms",
        price: 71.43,
        img: sohali
    },
];

export default ItemList;