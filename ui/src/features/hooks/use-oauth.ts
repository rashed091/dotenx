import { useEffect, useState } from 'react'
import { API_URL } from '../../api'
import { OAuthMessage } from '../../pages/oauth'

interface Options {
	onSuccess: (accessToken: string, refreshToken: string) => void
}

export function useOauth({ onSuccess }: Options) {
	const [error, setError] = useState('')
	const [accessToken, setAccessToken] = useState('')
	const [refreshToken, setRefreshToken] = useState('')

	function connect(providerName: string) {
		const popupWindow = window.open(
			`${API_URL}/oauth/auth/${providerName}`,
			'_blank',
			'width=800, height=600'
		)
		if (popupWindow) popupWindow.focus()
	}

	useEffect(() => {
		const handleMessage = (event: MessageEvent<OAuthMessage>) => {
			if (event.origin !== process.env.REACT_APP_URL) return
			const { error, accessToken, refreshToken } = event.data
			if (error) setError(error)
			if (accessToken) {
				setAccessToken(accessToken)
				setRefreshToken(refreshToken ?? '')
				onSuccess(accessToken, refreshToken ?? '')
			}
		}
		window.addEventListener('message', handleMessage)
		return () => window.removeEventListener('message', handleMessage)
	}, [onSuccess])

	return {
		connect,
		error,
		accessToken,
		refreshToken,
	}
}