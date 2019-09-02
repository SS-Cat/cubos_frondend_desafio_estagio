import React from 'react';
import { Input } from './styles';

export interface EventHandlerProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const SearchBar = ({ onChange, value }: EventHandlerProps) => {
    return (
        <Input 
            onChange={onChange}
            value={value}
            placeholder='Busque um filme por nome, ano ou gênero...'
            type='text' 
        />
    )
}
