/**import modules */
import React, { lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
/**import pages */
const Landing = lazy(() => import('containers/landing'));
const Profile = lazy(() => import('containers/profile'));
const CreateProfile = lazy(() => import('containers/profile/create'));
const EmptyProfile = lazy(() => import('containers/profile/empty'));
const CreateAvatar = lazy(() => import('containers/avatar/create'));
const UploadAvatar = lazy(() => import('containers/avatar/upload'));
const Avatar = lazy(() => import('containers/avatar'));
const Brands = lazy(() => import('containers/brands'));
const VirtualStore = lazy(() => import('containers/virtual-store'));
const Store = lazy(() => import('containers/store'));
const Collection = lazy(() => import('containers/collection'));
const ItemRare = lazy(() => import('containers/item-rare'));
const ItemCommon = lazy(() => import('containers/item-common'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="profile" element={<Outlet />}>
        <Route path="" element={<Profile />} />
        <Route path="empty" element={<EmptyProfile />} />
        <Route path="create" element={<CreateProfile />} />
        <Route path="avatar" element={<Avatar />} />
        <Route path="avatar/create" element={<CreateAvatar />} />
        <Route path="avatar/upload" element={<UploadAvatar />} />
      </Route>
      <Route path="brands" element={<Brands />} />
      <Route path="virtual-store" element={<VirtualStore />} />
      <Route path="store" element={<Store />} />
      <Route path="collection" element={<Collection />} />
      <Route path="item-rare" element={<ItemRare />} />
      <Route path="item-common" element={<ItemCommon />} />
    </Routes>
  );
};

export default AppRoutes;
