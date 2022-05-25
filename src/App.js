import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <Menu />
      </main>
    </React.Fragment>
  );
}

export default App;
