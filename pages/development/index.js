import Changelog from '../../views/development/ChangeLog';

export default function Development({ changelogs }) {
    return <>
        <Changelog changelogs={ changelogs } />
    </>;
}

export async function getServerSideProps() {
   const res = await fetch('http://localhost:43921/api/changelog');
   const { data } = await res.json();
   return {
       props: { changelogs: data }
   };
}
