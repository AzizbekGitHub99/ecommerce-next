import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";

import Query from "./components/query";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["arial"],
});

const CategoriesPage = () => {
  return (
    <div className={bebasNeue.className}>
      <h1>CategoriesPage</h1>
      <Query />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, aliquam
        obcaecati! Iusto ad distinctio aut accusantium quasi eos voluptate error
        adipisci voluptatibus natus? Eaque esse at sit tenetur dolor mollitia
        voluptates in veritatis ratione! Neque cumque quas est, praesentium,
        perferendis iusto nulla ipsum, pariatur ad molestias quaerat in ducimus
        fuga aliquid libero quasi. In tenetur nisi sint et saepe eius nesciunt,
        endus impedit molestiae a! Provident, ad? Magnam consequatur molestias
        sequi minus obcaecati, eaque maiores dolore aperiam. Incidunt expedita,
        vel numquam doloribus natus eum. Nulla ullam velit, totam repellat,
        debitis incidunt consequatur id deleniti excepturi delectus aut
        temporibus consequuntur est illo! Voluptate beatae eaque ipsam!
      </p>
    </div>
  );
};

export default CategoriesPage;
