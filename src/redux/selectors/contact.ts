import { createSelector } from '@reduxjs/toolkit';
import {store} from '../store';

const getContactList = (store:any) =>
    store.contact;

export const selectBusiness_list = createSelector(
    getContactList,
    (contacts) => contacts ?? []
);