import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Avoca-no!</h2>
      <h3>No deforestation for avocado plantations!</h3>
      <p>
        In Portugal in the middle of a forest of pine and cork oaks an
        environmental disaster is looming.<br></br> Directly on a groundwater
        line and in an area that has been categorised as 'Natura 2000' by the EU
        as being particularly worthy of protection, a gigantic plantation is
        planned. An unknown amount of trees have already been felled illegally
        and generated unprecedented resistance in Portugal.
        <br></br> Already 1100 organizations and private individuals opposed the
        almost 700-hectare plantation at a public hearing. <br></br>So there is
        still hope: In mid-August, politicians will decide whether the
        controversial plans can be implemented.<br></br>Let's collect together
        evidence to save not only 'Natura 2000', but every piece of land that is
        not used up for avocados in the interests of sustainability - in
        Portugal and all over the world! In Peru, Chile, Mexico, South Africa
        and so on. Whether vegetarian, vegan or flexitarian.
      </p>
      <h2>Let's save this planet together!</h2>
    </main>
  );
}
