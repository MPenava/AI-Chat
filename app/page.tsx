'use client';

import { Conversation, ConversationEmptyState } from '@/components/ai-elements/conversation';
import { PromptInput, PromptInputBody, PromptInputSubmit, PromptInputTextarea, PromptInputTools } from '@/components/ai-elements/prompt-input';
import { useChat } from '@ai-sdk/react';
import { MicIcon } from 'lucide-react';

const Chat = () => {
  const { messages, sendMessage, status } = useChat();

  console.log(messages, status);

  return (
    <div className="font-sans min-h-[100vh] flex flex-col items-center p-6">
      <main className='w-full max-w-2xl flex flex-col gap-4 flex-1'>
        <h1 className="text-xl font-semibold">Chat</h1>

        <Conversation>{messages.length === 0 ? (<ConversationEmptyState description='Say Hi!' />) : null}</Conversation>
        <PromptInput multiple onSubmit={() => { }}>
          <PromptInputBody>
            <PromptInputTextarea placeholder='Type a message...' />
          </PromptInputBody>
          <PromptInputTools>
            <PromptInputSubmit status={status} />
          </PromptInputTools>
        </PromptInput>
      </main>
    </div>
  );
}

export default Chat;