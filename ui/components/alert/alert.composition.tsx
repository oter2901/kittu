import React from 'react';
import '@kittu/ui-kit.core.styles/styles.scss';
import { Icon } from '@kittu/ui-kit.components.icon';
import { Alert } from './Alert';

const styles = { minWidth: '100%' };

export const DefaultAlert = () => {
  return (
    <Alert
      style={styles}
      leftElement={<Icon>rocket</Icon>}
      rightElement={
        <button
          aria-label="Close"
          className="close"
          data-dismiss="alert"
          type="button"
        >
          <Icon>close</Icon>
        </button>
      }
    >
      <h4>Welcome to Kittu UI Kit!</h4>
      <p>
        Super nice kit, easy to compose and build UIs with a beautiful design
      </p>
    </Alert>
  );
};

export const PrimaryAlert = () => {
  return (
    <Alert
      primary
      style={styles}
      leftElement={<Icon>rocket</Icon>}
      rightElement={
        <button
          aria-label="Close"
          className="close"
          data-dismiss="alert"
          type="button"
        >
          <Icon>close</Icon>
        </button>
      }
    >
      983 people started following you.
    </Alert>
  );
};

export const SuccessAlert = () => {
  return (
    <Alert
      success
      style={styles}
      leftElement={<Icon>rocket</Icon>}
      rightElement={
        <button
          aria-label="Close"
          className="close"
          data-dismiss="alert"
          type="button"
        >
          <Icon>close</Icon>
        </button>
      }
    >
      Yey, it's a success!
    </Alert>
  );
};

export const WarningAlert = () => {
  return (
    <Alert
      warning
      style={styles}
      leftElement={<Icon>rocket</Icon>}
      rightElement={
        <button
          aria-label="Close"
          className="close"
          data-dismiss="alert"
          type="button"
        >
          <Icon>close</Icon>
        </button>
      }
    >
      Your coffee might be too hot!
    </Alert>
  );
};

export const DangerAlert = () => {
  return (
    <Alert
      danger
      style={styles}
      leftElement={<Icon>rocket</Icon>}
      rightElement={
        <button
          aria-label="Close"
          className="close"
          data-dismiss="alert"
          type="button"
        >
          <Icon>close</Icon>
        </button>
      }
    >
      Your dog needs some water!
    </Alert>
  );
};
