import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../context/ContextApi';
import MovementsUI from './MovementsUI';
import { api } from '../../services/api';

const Movements: React.FC = () => {
  const [movements, setMovements] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { user, getBalance, balance } = useContext(ContextApi);

  const handleMovement = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`balance/user/${user?.id}`);

      getBalance && getBalance(user?.id || '');
      setMovements(data.lastMovements.reverse());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handleMovement();
    getBalance && getBalance(user?.id || '');
  }, [user, getBalance, balance]);

  return <MovementsUI loading={loading} movements={movements} />;
};

export default Movements;
