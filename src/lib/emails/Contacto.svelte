<script>
    import {generales} from '$lib/stores'
	import { Column,
		Container,
		Hr,
		Html,
		Img,
		Section,
		Text} from 'svelte-email';

	export let email = '';
    export let phone = '';
    export let mensaje = '';
    export let logo = '';
    const main = {backgroundColor: '#000000'};
    const container = {
		margin: '0 auto',
		padding: '20px 10px',
		width: '660px',
        maxWidth:'700px'
	};
    const tableCell = { display: 'table-cell' };

	const heading = {
		fontFamily:"Raleway",
		fontSize: '32px',
		fontWeight: '800',
		color: '#ffffff'
	};

    const label = {
		margin: '15px 0 0 0',
        fontSize: '15px',
        fontWeight: '300',
	};

    const text = {
        fontSize: '20px',
	};
    const margin = {
        fontSize: '20px 48px',
	};
</script>

<Html lang="en">
    <Section style={main}>
		<Container style={container}>
			<Section>
                <table>
                    <tbody>
                        <tr>
                            <td width={320}>
                                <Img src={`${logo}`} height="85" width="130" alt="Layout Aleman" />
                            </td>
                            <td width={300}>
                                <Text style={heading}>Nuevo Mensaje</Text>
                            </td>
                            
                        </tr>
                       
                    </tbody>
                </table>

                
			</Section>
        </Container>
    </Section>
    <Section style={margin}>
        <table>
            <tbody>
                <tr>
                    <td >
                        <Text style={label}>EMAIL:  {email}</Text>
                        <br>
                        <Text style={label}>TELEFONO:  {phone}</Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={label}>MENSAJE:</Text>
                        <Text style={text}>{mensaje}</Text>
                    </td>
                </tr>
            </tbody>
        </table>
                    
    </Section>
	
	<Hr />
	
</Html>