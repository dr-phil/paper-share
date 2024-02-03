import React, { useState, useEffect } from 'react';

import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Paper from "@components/Paper"
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { highlightSelection } from '@root/common/highlight';
import CommentBar from '@root/components/Sidebar';

async function onAuthenticate({ email, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.user) {
    return null;
  }

  return result;
}

async function onRefreshAPIKey({ email, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/regenerate-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.user) {
    return null;
  }

  return result;
}

function ExampleForms(props) {
  const [currentError, setError] = useState<string | null>(null);
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [currentUser, setUser] = React.useState<Record<string, any> | null>(null);
  const [name, setName] = React.useState<string>('');
  const [key, setKey] = React.useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [selections, setSelections] = useState<string[] | []>([]);

  const process = () => {
      const s: string = window.getSelection()?.toString() || '';
      if (s === '') {
        return;
      }
      setSelections(prev => [...prev, s]);
      highlightSelection();
  
  }


  return (
    <Page
      title="api.internet.dev: Authentication"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/authentication"
    >
      <KeyHeader onInputChange={setKey} onHandleThemeChange={Utilities.onHandleThemeChange} value={key} />
      <ThinAppLayout>
        <FormHeading>Who even are you</FormHeading>
        <FormParagraph>
          Let [Phil] know who you are none of that anonymous stuff
        </FormParagraph>
        <InputLabel style={{ marginTop: 48 }}>Name given to you at birth 😮‍💨</InputLabel>
        <Input onChange={(e) => setName(e.target.value)} name="email" style={{ marginTop: 8 }} type="text" placeholder="cornelius schroder 😎" value={name} />
        <Button
          loading={loading}
          onClick={async () => {

            if (Utilities.isEmpty(name)) {
              setModal({
                name: 'ERROR',
                message: 'You must provide a name.',
              });
              return;
            }


            setLoading(true);
            await new Promise(res => setTimeout(res, 1000));
            setLoading(false);
            // if (!response) {
            //   setModal({
            //     name: 'ERROR',
            //     message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
            //   });
            //   return;
            // }
            // setUser(response.user);
          }}
          style={{ marginTop: 24, width: '100%' }}
        >
          Submit
        </Button>
        <P href="/">← Return home</P>

        {name ? (
          <div style={{display:'flex', width: '100%'}}>
            <Paper handleSelectionChange={process}/>
            <CommentBar highlights={selections} />
          </div>
        ) : null}
      </ThinAppLayout>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleForms;
