import { Link } from "react-router";

const About = () => {
  return (
    <div className="border-2 min-h-screen flex justify-between items-center gap-4 px-5">
      <div className="border-2">
        <img
          src="about2.png"
          className=""
          alt=""
        />
      </div>

      <div className="border-2 space-y-5 ">
        <h2 className="text-4xl font-semibold tracking-tighter">
          I'm Lorem, ipsum dolor.
        </h2>

        <p className="text-amber-800/90 tracking-wider text-justify">
          Shelves that need putting up properly, a door that has not closed
          since spring, the flat-pack still in its box. Two qualified
          tradespeople, published rates, and a written quote before any work
          starts. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nesciunt, tempore officia commodi sapiente quibusdam quis quidem eum
          atque consectetur cum soluta suscipit alias odio molestiae porro illo
          libero! Magnam, ipsum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nam nihil adipisci alias fugit deleniti, error
          quidem! Sed quia saepe aspernatur deserunt repellat dicta eaque!
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime optio
          quam hic dolore eos distinctio laborum?
        </p>

        <div className="flex gap-4">
          <Link
            to="https://www.facebook.com/"
            className="px-4 py-2 rounded-full text-white hover:bg-amber-400 hover:text-black bg-amber-600 capitalize "
          >
            fb
          </Link>
          <Link
            to="https://www.facebook.com/"
            className="px-4 py-2 rounded-full text-white hover:bg-amber-400 hover:text-black bg-amber-600 capitalize "
          >
            Insg
          </Link>
          <Link
            to="https://www.facebook.com/"
            className="px-4 py-2 rounded-full text-white hover:bg-amber-400 hover:text-black bg-amber-600 capitalize "
          >
            X
          </Link>
          <Link
            to="https://www.facebook.com/"
            className="px-4 py-2 rounded-full text-white hover:bg-amber-400 hover:text-black bg-amber-600 capitalize "
          >
            Yt
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
