import * as React from 'react';
//@ts-ignore
import cls from '../avatar.module.scss';

export type AvatarStatusProps = {
  status: React.ReactNode;
};

export const AvatarStatus = ({ status }: AvatarStatusProps) => (
  <div className={cls.statusWrapper}>
    {status === 'uik_online' ? (
      <div className={cls.statusOnline} />
    ) : (
      <span>{status}</span>
    )}
  </div>
);

AvatarStatus.displayName = 'AvatarStatus';

export default AvatarStatus;
