import Pic from "../../Images/profilePic.webp";
import Pic_sm from "../../Images/profilePic-sm.webp";
import Pic_md from "../../Images/profilePic-md.webp";
import { motion } from "framer-motion";
import Projects from "../../components/Projects";
import Arrow from "./Arrow";
import Logo from "../../components/Logo";
import { Typewriter } from "../../components/Typewriter";
import memoryGame from "../../Images/memoryGame.webp";
import memoryGame_sm from "../../Images/memoryGame-sm.webp";
import memoryGame_md from "../../Images/memoryGame-md.webp";
import myShop from "../../Images/myShop.webp";
import myShop_sm from "../../Images/myShop-sm.webp";
import myShop_md from "../../Images/myShop-md.webp";
import cvBuilder from "../../Images/cvBuilder.webp";
import cvBuilder_sm from "../../Images/cvBuilder-sm.webp";
import cvBuilder_md from "../../Images/cvBuilder-md.webp";
import weatherChecker from "../../Images/weatherChecker.webp";
import weatherChecker_sm from "../../Images/weatherChecker-sm.webp";
import weatherChecker_md from "../../Images/weatherChecker-md.webp";
import ticTacToe from "../../Images/ticTacToe.webp";
import ticTacToe_sm from "../../Images/ticTacToe-sm.webp";
import ticTacToe_md from "../../Images/ticTacToe-md.webp";
import toDoList from "../../Images/toDoList.webp";
import toDoList_sm from "../../Images/toDoList-sm.webp";
import toDoList_md from "../../Images/toDoList-md.webp";
import restaurant from "../../Images/restaurant.webp";
import restaurant_sm from "../../Images/restaurant-sm.webp";
import restaurant_md from "../../Images/restaurant-md.webp";
import waldo from "../../Images/wheresWaldo.webp";
import waldo_sm from "../../Images/wheresWaldo-sm.webp";
import waldo_md from "../../Images/wheresWaldo-md.webp";
import mattBook from "../../Images/mattBook.webp";
import mattBook_sm from "../../Images/mattBook-sm.webp";
import mattBook_md from "../../Images/mattBook-md.webp";
const photos = [
  {
    image: [mattBook, mattBook_sm, mattBook_md],
    link: "https://mattbook-frontend.onrender.com",
    code: "https://github.com/mkellner43/front-end-mb/tree/main",
    alt: "image of social media web application",
    backend: "https://github.com/mkellner43/back-end-mb/tree/main",
  },
  {
    image: [weatherChecker, weatherChecker_sm, weatherChecker_md],
    link: "https://mkellner43.github.io/weather_api/",
    code: "https://github.com/mkellner43/weather_api",
    alt: "image of weather web application",
  },
  {
    image: [memoryGame, memoryGame_sm, memoryGame_md],
    link: "https://mkellner43.github.io/memory-game/",
    code: "https://github.com/mkellner43/memory-game",
    alt: "image of memory game web application",
  },
  {
    image: [myShop, myShop_sm, myShop_md],
    link: "https://mkellner43.github.io/shop_react/",
    code: "https://github.com/mkellner43/shop_react",
    alt: "image of a shop web application",
  },
  {
    image: [cvBuilder, cvBuilder_sm, cvBuilder_md],
    link: "https://mkellner43.github.io/cv-project/",
    code: "https://github.com/mkellner43/cv-project",
    alt: "image of cv builder web application",
  },
  {
    image: [ticTacToe, ticTacToe_sm, ticTacToe_md],
    link: "https://mkellner43.github.io/ticTacToeJs/",
    code: "https://github.com/mkellner43/ticTacToeJs",
    alt: "image of a ticktactoe web application",
  },
  {
    image: [toDoList, toDoList_sm, toDoList_md],
    link: "https://mkellner43.github.io/toDoListJS/",
    code: "https://github.com/mkellner43/toDoListJs",
    alt: "image of to do list web application",
  },
  {
    image: [restaurant, restaurant_sm, restaurant_md],
    link: "https://mkellner43.github.io/restaurant_page/",
    code: "https://github.com/mkellner43/restaurant_page",
    alt: "image of restaurant web application",
  },
  {
    image: [waldo, waldo_sm, waldo_md],
    link: "https://mkellner43.github.io/wheres_waldo_frontend/",
    code: "https://github.com/mkellner43/wheres_waldo_frontend",
    alt: "image of a where's waldo web application",
  },
];

function Home({ setTheme, theme }) {
  return (
    <div className="w-screen bg-slate-200 dark:bg-stone-500 dark:text-white pt-[70px] overflow-hidden pb-20">
      <motion.section className="flex flex-col justify-start sm:justify-start items-center w-screen h-screen">
        <motion.div className="flex flex-col items-center grow mt-2">
          <Logo />
          <div className="flex flex-col items-center mt-5">
            <motion.img
              className="rounded-full shadow-2xl w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 aspect-square mb-5"
              src={Pic}
              srcSet={`
            ${Pic} 1200w,
            ${Pic_md} 800w,
            ${Pic_sm} 400w,
            `}
              alt="profile picture of Matthew in a suite"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            />
            <Typewriter
              text={"Matthew Kellner"}
              variant={"h2"}
              component={"h1"}
            />
            <Typewriter
              text="Web Developer"
              delay={4000}
              variant={"h3"}
              component={"h2"}
            />
          </div>
          {/* <div className="min-h-[150px] mt-5">
            <Arrow theme={theme} setTheme={setTheme} />
          </div> */}
        </motion.div>
      </motion.section>
      <Projects photos={photos} />
    </div>
  );
}

export default Home;
