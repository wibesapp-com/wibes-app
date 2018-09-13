import { gql } from 'apollo-boost';


const addWibesAppUserMutation = gql`
    mutation AddWibesAppUser($human_name: String!, $pass_code: String!, $backup_code: String!,$personal_key:String!,$reverb_coins:String!,$reputation:String!,$portal_name:String!,$wibe_wallet:String!,$block:String!){
        addWibesAppUser(human_name: $human_name, pass_code: $pass_code, backup_code: $backup_code,personal_key:$personal_key,reverb_coins:$reverb_coins,reputation:$reputation,portal_name:$portal_name,wibe_wallet:$wibe_wallet,block:$block){
            human_name
            portal_name
            pass_code
        }
    }
`;

export {addWibesAppUserMutation};
