class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3)
        const colors = {fontSize: '50px', backgroundColor: 'purple'}

    //use className for css to avoid errors in React instead of 'class'
        return (
            <div className="Machine"> 
                <p style={colors}>
                {this.props.s1}
                {this.props.s2}
                {this.props.s3}</p>
                <p className={winner ? 'win' : 'lose'}>
                    {winner ? 'Winner!' : 'Loser!'}
                </p>
            </div>
        )
    }
}