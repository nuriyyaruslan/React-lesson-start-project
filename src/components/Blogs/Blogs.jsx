import styles from './Blogs.module.css';

const Blogs = () => {
    return ( 
        <div className="component-cover">
            <img className={styles.image} src="https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className={styles.title}>Blogs</h2>
            <div className={`${styles.description} ${styles.bg}`}>
                Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
            </div>
        </div>
     );
}
 
export default Blogs;