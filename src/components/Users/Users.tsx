import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../images/images.jpg";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    onPageChanged: (pageNumber: number) => void

}


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>

                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : ''}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}
                        >{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                     <span>
                         <div>
                             <NavLink to={"/profile" + u.id}>
                             <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                             </NavLink>
                         </div>
                         <div>
                             {
                                 u.followed
                                     ? <button onClick={() => {
                                         props.unFollow(u.id)
                                     }}>Unfollow</button>
                                     : <button onClick={() => {
                                         props.follow(u.id)
                                     }}>Follow</button>
                             }
                         </div>
                     </span>
                    <span>
                         <span>
                             <div>{u.name}</div>
                             <div>{u.status}</div>
                         </span>
                         <span>
                             <div>{'u.location.country'}</div>
                             <div>{'u.location.city'}</div>
                         </span>
                     </span>
                </div>)
            }
        </div>
    );
};


// export class Users extends React.Component<UsersPropsType, any> {
//
//     // onPageChanged = (pageNumber: number) => {
//     //     this.props.setCurrentPage(pageNumber)
//     //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count =
//     //     ${this.props.pageSize}`).then(response => {
//     //         this.props.setUsers(response.data.items)
//     //     })
//     // }
//     render() {
//         let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
//         let pages = []
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//         return (
//             <div>
//                 <div>
//
//                     {
//                         pages.map(p => {
//                             return <span className={this.props.currentPage === p ? s.selectedPage : ''}
//                                          onClick={() => {this.props.onPageChanged(p)}}
//
//                             >{p}</span>
//                         })
//                     }
//                 </div>
//                 {
//                     this.props.users.map(u => <div key={u.id}>
//                      <span>
//                          <div>
//                              <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
//                          </div>
//                          <div>
//                              {
//                                  u.followed
//                                      ? <button onClick={() => {
//                                          this.props.unFollow(u.id)
//                                      }}>Unfollow</button>
//                                      : <button onClick={() => {
//                                          this.props.follow(u.id)
//                                      }}>Follow</button>
//                              }
//                          </div>
//                      </span>
//                         <span>
//                          <span>
//                              <div>{u.name}</div>
//                              <div>{u.status}</div>
//                          </span>
//                          <span>
//                              <div>{'u.location.country'}</div>
//                              <div>{'u.location.city'}</div>
//                          </span>
//                      </span>
//                     </div>)
//                 }
//             </div>
//         );
//     }
// }

