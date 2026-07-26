import './News.css';

const News = () => {
    
    const newsTitle = {
        color: 'blue',
        fontSize: '56px',
        textTransform: 'uppercase'
    }

    const newsDesc = {
        color: 'black',
        fontSize: '18px',
        lineHeight: '32px'
    }

    return ( 
        <div className="component-cover">
            <h2>News</h2>
            <h4 style={newsTitle}>News title is here!</h4>
            <p style={newsDesc}>Our "Show React" tool makes it easy to demonstrate React. It shows both the code and the result.</p>
            <img className='news-image' src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
     );
}
 
export default News;