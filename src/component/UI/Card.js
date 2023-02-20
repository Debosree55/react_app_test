import './Card.css'

function Card(props){
    const classes= 'card ' + props.className
    console.log('1111',classes)

return (
    <div className={classes}>{props.children}</div>
)
}

export default Card