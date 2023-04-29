import styles from "../styles/NftCreator.module.css";
import NFTCreatorPage from "../components/nftCreator";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NFTCreatorPage/>
      </main>
    </div>
  );
}