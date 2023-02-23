import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../context/ContextApi';
import MovementsUI from './MovementsUI';

const Movements: React.FC = () => {
  const [movements, setMovements] = useState<any[]>([]);
  const { user, getBalance, balance } = useContext(ContextApi);

  const handleMovement = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:6000/balance/user/${user?.id}`
      );
      getBalance && getBalance(user?.id || '');
      setMovements(data.lastMovements.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMovement();
    getBalance && getBalance(user?.id || '');
  }, [user, getBalance, balance]);

  return <MovementsUI movements={movements} />;
};

export default Movements;
