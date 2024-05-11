import {useEffect,useContext,React} from 'react'
import { PlayersContext } from '../context/PlayersContext';
import { MyContext } from '../context/MyContext';
import {colors_of_players , card_details} from '../data/cards_details';

function useTransaction(props) {
  const { allPlayersData, setAllPlayersData, whosTurn, setWhosTurn, allGameItemsRefs, whetherUserHasPurchasedProperty, setWhetherUserHasPurchasedProperty } = useContext(PlayersContext);
  const { currentCity, setCurrentCity } = useContext(MyContext);

  useEffect(() => {
    console.log("gg", whetherUserHasPurchasedProperty);
    const currPlayerCurrentLocation = allPlayersData[whosTurn]?.currentPosition;
    console.log("bot");
    if (whetherUserHasPurchasedProperty !== 0 && whetherUserHasPurchasedProperty!==null) {
      if (whetherUserHasPurchasedProperty === 1) {
        handleBuyPassOfProperties(currPlayerCurrentLocation, whosTurn);
      }
      else if (whetherUserHasPurchasedProperty === -1) {
        console.log("decision made ", whetherUserHasPurchasedProperty);
      }
      setWhosTurn(prev => (prev + 1) % allPlayersData.length);
      setCurrentCity(null);
      setWhetherUserHasPurchasedProperty(0);
      props.setBeat(prev => !prev);
    }
    else if (currentCity !== null) {
      setWhetherUserHasPurchasedProperty(0);
      console.log("aaya");
      setCurrentCity(null);
      setWhosTurn(prev => (prev + 1) % allPlayersData.length);
      props.setBeat(prev => !prev);
    }
  }, [whetherUserHasPurchasedProperty]);

  
  function handleBuyPassOfProperties(currPlayerCurrentLocation, whosTurn) {
    console.log("decision made ", whetherUserHasPurchasedProperty);
    setAllPlayersData(prev => {
      const newValues = prev.map((val, ind) => {
        if(ind === whosTurn) {
          allGameItemsRefs.current[currPlayerCurrentLocation].boughtBy = whosTurn;
        }
        return ind === whosTurn ? { ...val, propertiesOwned: [...(val.propertiesOwned), currentCity], cashAvailable: Number(val.cashAvailable)-Number(card_details.cities[currentCity].Purchase_Price) } : val;
      });
      console.log(newValues, card_details.cities[currentCity].Purchase_Price);
      return newValues;
    });
    console.log(allGameItemsRefs,allGameItemsRefs.current[currPlayerCurrentLocation].refToDiv.current);
    allGameItemsRefs.current[currPlayerCurrentLocation].refToDiv.current.style.color=`${colors_of_players[whosTurn]}`;
    
    // setCurrentCity(allGameItemsRefs.current[currPlayerCurrentLocation]);
    // setWhosTurn(prev => (prev+1)%allPlayersData.length);
    // setWhosTurn(prev => (prev+1)%allPlayersData.length);
    // props.setBeat(prev => !prev);
  }
}

export default useTransaction;