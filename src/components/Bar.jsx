import porscheLogo from '../assets/logo.png';

export default function Bar() {
    const BarStyle = {
        width : '100%',
        display : 'flex',
        maxHeight : '15vh',
        overflow : 'hidden',
        padding : '50px',
    }

    const BarComponentStyle = {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        width : '33.33%',
    }

    const logoStyle={
        maxHeight : '100%',
        maxWidth : '100%', 
    }

    const TitleStyle = {
        fontSize : '100px',
        textAlign : 'center',
        fontFamily : 'Porsche',
    }

    return (
        <div style={BarStyle}>
            <div style={BarComponentStyle}>
                <img src={porscheLogo} style={logoStyle} alt="car"/>
            </div>
            <div style={BarComponentStyle}>
                <h1 style={TitleStyle}>Porsche</h1>
            </div>
            <div style={BarComponentStyle}></div>
        </div>
    );
}
