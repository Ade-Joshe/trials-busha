import React from 'react'
import { Button } from '../../components'
import { useAppStore, userData } from '../../store'

const LoginPage = () => {

  const updateUser = useAppStore(state => state.updateUser);

  return (
    <div>
      LoginPage

      <Button
        label={"Login in"}
        onClick={() => updateUser(userData[0])}
      />
    </div>
  )
}

export default LoginPage