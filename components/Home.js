import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>HOME</div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;

/*

CONSIGNES :

👉  Grâce à la mécanique de Next.js et balise Link, faites en sorte que chaque item du menu affiche le composant associé.

- Le composant Home sera accessible via l’URL /

- Le composant Shop sera accessible via l’URL /shop

- Le composant About sera accessible via l’URL /about

Afin d’éviter des répétitions de code, le composant Menu est déjà chargé dans le point d’entrée de l’application, le fichier pages/_app.js.
*/
