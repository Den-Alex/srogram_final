import s from "./Profile.module.css";
import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";

type MapStateToPropsType = {
    profile: null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: null) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


export class ProfileAPI extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
            .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
export const ProfileContainer = connect(mapStateToProps,{setUserProfile})(ProfileAPI)