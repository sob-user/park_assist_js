import Place from '../img/place.png';

export const css = {
    LandingPage: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    },

    LandingPageContainer: {
        width: '50vw',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'space-between'
    },

    LogoContainer: {
        height: '50%',
        width: '100%'
    },

    Logo: {
        height: '20vh',
        width: 'auto'
    },

    ButtonStart: {
        width: '250px',
        height: '60px',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        border : '5px solid #feae05',
        borderRadius : '5px',
        textTransform: 'uppercase'
    },

    Gameboard: {
        height: '100vh',
        width: '100vw',
        background: '#363332'
    },

    sidewalkUp: {
        width: '100vw',
        height: '25vh',
        display: 'flex'
    },

    sidewalkDown: {
        width: '100vw',
        height: '35vh',
        display: 'flex'
    },

    road: {
        width: '100vw',
        height: '16vh',
        display: 'flex'
    },

    sidewalkLeftTop: {
        width: '25%',
        height: '100%',
        borderBottomRightRadius: '20px',
        background: '#797474b8',
        borderBottom: '5px solid #36333257'
    },

    sidewalkLeftBottom: {
        width: '25%',
        height: '98%',
        borderTopRightRadius: '20px',
        borderTop: '5px solid #36333257',
        background: '#797474b8'
    },

    sidewalkMiddleTop: {
        width: '80%',
        height: '100%'
    },

    sidewalkMiddleBottom: {
        width: '80%',
        height: '98%'
    },

    sidewalkRightTop: {
        width: '25%',
        height: '100%',
        borderBottomLeftRadius: '20px',
        borderBottom: '5px solid #36333257',
        background: '#797474b8'
    },

    sidewalkRightBottom: {
        width: '25%',
        height: '98%',
        borderTopLeftRadius: '20px',
        borderTop: '5px solid #36333257',
        background: '#797474b8'
    },

    marginBlock: {
        width: '100%',
        height: '50%',
        borderBottom: '5px solid #36333257',
        background: '#797474b8'
    },

    parkingPlaces: {
        width: '100%',
        height: '50%',
        display: 'flex',
        borderRadius: '10px'
    },

    ParkingPlaceUp : {
        height: '100%',
        width: '25%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        background: `url(${Place})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    },

    ParkingPlaceDown: {
        height: '100%',
        width: '12.5%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
    },

    ParkingPlaceUpCar: {
        height: 'auto',
        width: '90%'
    },

    ParkingPlaceDownCar: {
        height: 'auto',
        width: '90%'
    },

    parkingPlacesBottom: {
        width: '100%',
        height: '80%',
        display: 'flex',
        borderRadius: '10px'
    },

    marginBlockBottom: {
        width: '100%',
        height: '20%',
        borderTop: '5px solid #36333257',
        background: '#797474b8'
    },

    controller: {
        height: '24vh',
        with: '100vw',
        background: '#2f2929',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    startGame: {
        height: '60px',
        width: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    StartGameButton: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: '0.6em',
        background: '#feae05',
        color: 'white',
        textTransform: 'uppercase'
    },

    OccupationRate: {
        height: '50%',
        width: '180px'
    },

    OccupationRateTitle: {
        height: '30%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.5em',
        color: '#feae05'
    },

    OccupationRateSet: {
        height: '70%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#feae05'
    },

    Less: {
        height: '80%',
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    DisplayOccupationRate: {
        height: '80%',
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    More: {
        height: '80%',
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    ChooseYourSide: {
        height: '50%',
        width: '180px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#feae05'
    },

    ChooseYourSideTitle: {
        height: '30%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.5em'
    },

    ChooseYourSideArrows: {
        height: '70%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '2em'
    },

    ParkRightSide: {
        height: '80%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    ParkLeftSide: {
        height: '80%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    animationCar: {
        height: '100%',
        width: '90%'
    },

    car: {
        height: '100%',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }
}