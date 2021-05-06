import useLocalStorage from './useLocalStorage';

const useDarkMode = ()=> {
    const [someValue, setSomeValue] = useLocalStorage("darkMode", false);
  
    
    return([someValue, setSomeValue]);
  }

  export default useDarkMode;