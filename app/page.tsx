'use client';

import { Conversation, ConversationContent, ConversationEmptyState, ConversationScrollButton } from '@/components/ai-elements/conversation';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';
import { PromptInput, PromptInputBody, PromptInputProvider, PromptInputSubmit, PromptInputTextarea, PromptInputTools } from '@/components/ai-elements/prompt-input';
import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { MessageSquare } from 'lucide-react';


const Chat = () => {
  const { messages, sendMessage, status } = useChat();

  return (
    <div className="font-sans h-screen flex flex-col items-center p-6 bg-background">
      <main className="w-full max-w-2xl flex flex-col gap-8 flex-1">
        <h1 className="text-xl font-semibold text-center text-foreground">Let's talk about Marko Penava...</h1>
        <Conversation className="border rounded-xl">
          <ConversationContent>
            {messages.length === 0 ? (
              <ConversationEmptyState
                icon={<MessageSquare className="size-12" />}
                title="Start a conversation"
                description="Type a message below to begin chatting"
              />
            ) : (
              messages.map((message) => (
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case 'text':
                          return (
                            <MessageResponse key={`${message.id}-${i}`}>
                              {part.text}
                            </MessageResponse>
                          );
                        default:
                          return null;
                      }
                    })}
                  </MessageContent>
                </Message>
              ))
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        <PromptInputProvider>
          <PromptInput multiple onSubmit={(message, e) => {
            e.preventDefault();
            const text = (message.text ?? "").trim();
            if (text) {
              sendMessage({ text });
            }
          }}>
            <PromptInputBody>
              <PromptInputTextarea placeholder="Type a message..." />
            </PromptInputBody>
            <PromptInputTools>
              <PromptInputSubmit status={status} variant="secondary" />
            </PromptInputTools>
          </PromptInput>
        </PromptInputProvider>

      </main>
    </div>
  );
}

export default Chat;