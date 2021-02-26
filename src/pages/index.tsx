import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import { ChallengerBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar></ExperienceBar>

      <section>
        <div>
          <Profile></Profile>
          <CompletedChallenges></CompletedChallenges>
          <Countdown></Countdown>
        </div>

        <div>
          <ChallengerBox></ChallengerBox>
        </div>
      </section>
    </div>
  )
}