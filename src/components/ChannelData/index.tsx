import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {/* Isso server pra espamar código em vez de Ctrl C + V  */}
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Mike Fernando"
            date="11/12/2020"
            content="Esta é uma mensagem!"
          />
        ))}

        <ChannelMessage
          author="Othoniel Eduardo"
          date="11/12/2020"
          content={
            <>
              <Mention>@Mike Fernando</Mention>, me carrega no Lol de novo por favor?
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;