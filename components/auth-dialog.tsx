"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export function AuthDialog() {
  const [isLogin, setIsLogin] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    organization: "",
    bio: ""
  })
  const [rememberMe, setRememberMe] = useState(false)
  const { setIsLoggedIn } = useAuth()
  const router = useRouter()

  // 외부에서 다이얼로그를 열 수 있도록 전역 함수 등록
  React.useEffect(() => {
    (window as any).openAuthDialog = () => setIsOpen(true)
  }, [])

  // 저장된 로그인 정보 불러오기
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail')
    const savedPassword = localStorage.getItem('savedPassword')
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true'
    
    if (savedEmail && savedPassword && savedRememberMe) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail,
        password: savedPassword
      }))
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 간단한 시뮬레이션 - 실제로는 서버와 통신
    if (isLogin) {
      if (formData.email && formData.password) {
        // 로그인 정보 저장 처리
        if (rememberMe) {
          localStorage.setItem('savedEmail', formData.email)
          localStorage.setItem('savedPassword', formData.password)
          localStorage.setItem('rememberMe', 'true')
        } else {
          localStorage.removeItem('savedEmail')
          localStorage.removeItem('savedPassword')
          localStorage.removeItem('rememberMe')
        }
        
        setIsLoggedIn(true)
        setIsOpen(false)
        alert("로그인 성공!")
        
        // 로그인 성공 후 블로그로 이동
        setTimeout(() => {
          router.push('/blog')
        }, 100)
      }
    } else {
      if (formData.email && formData.password && formData.name && formData.password === formData.confirmPassword) {
        setIsLoggedIn(true)
        setIsOpen(false)
        alert("회원가입 성공!")
        
        // 회원가입 성공 후 블로그로 이동
        setTimeout(() => {
          router.push('/blog')
        }, 100)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          data-login-trigger
        >
          <span>로그인/회원가입</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {isLogin ? "로그인" : "회원가입"}
          </DialogTitle>
        </DialogHeader>
        
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="이름을 입력하세요"
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력하세요"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>

              {isLogin && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="rememberMe" className="text-sm">
                    로그인 정보 저장
                  </Label>
                </div>
              )}
              
              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="비밀번호를 다시 입력하세요"
                    required={!isLogin}
                  />
                </div>
              )}

              {!isLogin && (
                <div>
                  <Label htmlFor="organization">
                    조직명 <span className="text-muted-foreground text-sm">(선택사항)</span>
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="소속 조직명을 입력하세요"
                  />
                </div>
              )}

              {!isLogin && (
                <div>
                  <Label htmlFor="bio">
                    자기소개 <span className="text-muted-foreground text-sm">(선택사항)</span>
                  </Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="간단한 자기소개를 입력하세요"
                    rows={3}
                    className="resize-none"
                  />
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                {isLogin ? "로그인" : "회원가입"}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <Button
                variant="ghost"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm"
              >
                {isLogin ? "계정이 없으신가요? 회원가입" : "이미 계정이 있으신가요? 로그인"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
