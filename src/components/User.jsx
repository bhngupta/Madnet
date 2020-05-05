import { IonItem, IonCard, IonGrid, IonRow, IonCol, IonChip, IonCardHeader, IonCardTitle, IonButton, IonPopover, IonIcon } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'

import {ellipsisVertical} from 'ionicons/icons';

const UserDetail = ({user, index}) => {  

  const [ showOptions, setShowOptions ] = React.useState(false); 

  return (
    <>
    <IonPopover
        isOpen={showOptions}
        onDidDismiss={e => setShowOptions(false)}
    >
      <IonItem button routerLink={ `/users/${user.id}/` } routerDirection="none" onClick={() => setShowOptions(false)}> More </IonItem>
      <IonItem button>Alumni</IonItem>      
        
    </IonPopover>
    <IonCard class="light list" key={index}>
      <Link to={ `/users/${user.id}/` }>
        <IonCardHeader className="noPadding">
          <IonCardTitle>          
              <p>
                #{index+1}. {user.name}
              </p>                 
          </IonCardTitle>
        </IonCardHeader>
      </Link>
        <IonGrid>
            <IonRow>                
                <IonCol size-md="3" size-xs="6">                    
                    <p>{ user.email }</p>
                    <p>{ user.phone }</p>                    
                </IonCol>
                <IonCol size-md="2" size-xs="6">                    
                    <p>Credit<br/>{ user.credit } </p>                    
                </IonCol>
                <IonCol size-md="5" size-xs="6">
                    {
                      user.groups.map((role,count) => {
                        return (
                          <IonChip className="roles" key={count}>{role.name}</IonChip>
                        )
                      })
                    }
                </IonCol>
                <IonCol size-md="2" size-xs="6">
                  <IonButton  size="small" fill="clear" slots="icon-only" color="light" className="userEditButton" onClick={() => setShowOptions(true)}><IonIcon icon={ellipsisVertical}></IonIcon></IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonCard>
    </>
  )
}

export default UserDetail;